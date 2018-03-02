import {UIMessageHelper,CodeTable,CodeTableSorter} from "rainbowui-core";
import config from "config";
import {PolicyStore,PolicyAction} from 'rainbow-foundation-sdk';

export default class Component extends React.Component {

    goto(event){
        const path = event.getParameter("path");
        window.location.hash="/"+path;
    }

    getURL(...key){
        const configJson = JSON.parse(sessionStorage.getItem("project_config"));
        let url = configJson['PA_SERVICE']+"/";
        switch(key.length)
        {
            case 1:
                url  +=  config[key[0]];
                break;
            case 2:
                url  +=  config[key[0]][key[1]];
                break;
            case 3:
                url  += config[key[0]][key[1]][key[2]];
                break;
            default:
                url  +=  configJson['PA_SERVICE'];
        }
        return url;
    }

    gotoPath(path){
        window.location.hash="/"+path;
    }



    savePolicy(){
        AjaxUtil.show();
        const url = this.getURL('POLICY_API','SAVE_POLICY');
        PolicyAction.savePolicy(url).then((policy)=>{
           // PolicyStore.setPolicy(policy);
            AjaxUtil.hide();
            UIMessageHelper.info("保存成功！",null, null);
        })
    }

    next(event){
        AjaxUtil.show();
        const self = this;
        const url = this.getURL('POLICY_API','SAVE_POLICY');
        PolicyAction.savePolicy(url).then((policy)=>{
            const path = event.getParameter("path");
            self.gotoPath(path);
        })
    }


    quote(event){
        const path = event.getParameter("path");
        const code = event.getParameter("code");
        const version = event.getParameter("version");
        const createPolicyUrl = this.getURL('POLICY_API','CREATE_POLICY');
        const sevePolicyUrl = this.getURL('POLICY_API','SAVE_POLICY');

        const param ={
            'productCode':code,
            'productVersion':version,
            'createPolicyUrl':createPolicyUrl
        };
        const self = this;
        AjaxUtil.show();
        PolicyAction.createPolicy(param).then((policy) => {
            PolicyAction.savePolicy(sevePolicyUrl).then((policy) => {
                self.gotoPath(path);
            });
        });
    }

    getType(){
        return new CodeTable([
            {id: 'person', text: "个人"},
            {id: 'company', text: "公司"},
        ], null, new CodeTableSorter());
    }

    getBookType(customer){
        if(customer["ClientName"]=="person"){
            return new CodeTable([
                {id: '1', text: "身份证"},
                {id: '2', text: "军官证"},
                {id: '3', text: "护照"},
                {id: '4', text: "其它"}
            ], null, new CodeTableSorter());
        }
        if(customer["ClientName"]=="company"){
            return new CodeTable([
                {id: '5', text: "工商登记号"}
            ], null, new CodeTableSorter());
        }

        return new CodeTable([
        ], null, new CodeTableSorter());

    }

    getlocationType(){
        return new CodeTable([
            {id: 1, text: "北京"},
            {id: 2, text: "上海"},
            {id: 3, text: "深圳"},
            {id: 4, text: "广州"}
        ], null, new CodeTableSorter());
    }

    getStatus(){
        return new CodeTable([
            {id: 10, text: "询价中"},
            {id: 100, text: "待支付"},
            {id: 120, text: "已出单"},
            {id: 110, text: "拒绝单"}
        ], null, new CodeTableSorter());
    }

    getBillType(){
        return new CodeTable([
            {id: 1, text: "增值税普票"},
            {id: 2, text: "增值税专票"},
        ], null, new CodeTableSorter());
    }

    getPageRouter(status){
        return this.getPagePathMap().get(status);
    }

    getPagePathMap(){
        const map = new Map();
        map.set(1, "quote/location/rate");
        map.set(2, "quote/location/basic");
        map.set(3, "quote/location/address");
        map.set(4, "quote/location/coverage");
        map.set(5, "quote/location/pay");
        map.set(6, "quote/location/issue");
        return map;
    }

    isAgent(){
        const config = JSON.parse(sessionStorage.getItem("project_config"));
        if(config&&config["login"]){
            return true;
        }else{
            return false;
        }
    }

    syncCustomer(policy,customer){
        if(policy['ClientName']=='person'){
            const param = {
                'objectName':'PartyIndividualCustomer',
                'objectCode':'PartyIndividualCustomer'
            };
            const partyIndividualCustomer = PolicyStore.getObject(param);
            const PartyAddressParam = {
                'objectName':'PartyAddress',
                'objectCode':'PartyAddress',
                'objectScope':partyIndividualCustomer
            };
            const partyAddress = PolicyStore.getObject(PartyAddressParam);
            customer['PartyName'] = partyIndividualCustomer["Name"];
            customer['BookType'] = partyIndividualCustomer["IdType"];
            customer['BookCode'] = partyIndividualCustomer["IdNo"];
            customer['Address'] = partyAddress['FullAddress'];
        }
        if(policy['ClientName']=='company'){
            const param = {
                'objectName':'PartyOrgCustomer',
                'objectCode':'PartyOrgCustomer'
            };
            const partyOrgCustomer = PolicyStore.getObject(param);
            const PartyAddressParam = {
                'objectName':'PartyAddress',
                'objectCode':'PartyAddress',
                'objectScope':partyOrgCustomer
            };
            const partyAddress = PolicyStore.getObject(PartyAddressParam);
            customer['PartyName'] = partyOrgCustomer["PartyName"];
            customer['BookType'] = partyOrgCustomer["IndustrySegment"];
            customer['BookCode'] = partyOrgCustomer["RegisterNo"];
            customer['Address'] = partyAddress['FullAddress'];
        }
    }

}

