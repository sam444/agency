'use strict';
module.exports = {
    DEFAULT_DATETIME_FORMATER: 'YYYY-MM-DD',
    DEFAULT_DATETIME_SUBMIT_FORMATER: 'YYYY-MM-DD[T]HH:mm:ss',
    DEFAULT_DATE_MANUAL_INPUT: false,
    DEFAULT_NUMBER_FORMAT: '###,###,###,###.##',
    DEFAULT_CURRENCY_UNIT: "¥",
    DEFAULT_CURRENCY_FORMAT: '###,###,###.##',
    DEFAULT_CODETABLE_KEYVALUE: {"KEY": "id", "VALUE": "text"},
    DEFAULT_BOOLEAN_VALUE: {"TRUE": "Y", "FALSE": "N"},
    DEFAULT_VALIDATOR_CONTAINER: "popover",// tooltip / popover
    DEFAULT_STYLE_CLASS: "default",
    DEFAULT_ECHARTS_THEME: "default",
    DEFAULT_LOCALSTORAGE_I18NKEY: "system_i18nKey",
    DEFAULT_SYSTEM_I18N: "zh_CN",
    DEFAULT_SYSTEM_THEME: "default",
    DEFAULT_DATATABLE_PAGESIZE:5,
    DEFAULT_DATATABLE_DROPDOWNLIST: [5,10, 20, 30, 40, 50],
    DEFAULT_MESSAGE_POSITION: {
        DEFAULT_POSITION: "toast-top-right",
        SUCCESS_POSITION: "toast-top-right",
        INFO_POSITION: "toast-top-right",
        WARNING_POSITION: "toast-top-right",
        ERROR_POSITION: "toast-top-right"
    },
    DEFAULT_CLASS: {
        PAGE_FOOTER: require("../../node_modules/rainbowui-core/src/page/PageFooter")
    },
    DEFAULT_INPUT_LAYOUT: "vertical",
    DEFAULT_DATATABLE_IS_INDEX: "false",
    DEFAULT_LOGOUT_IS_WORKING: "false",
    DEFAULT_LOGOUT_TIME_MINUTES: 30,
    DEFAULT_COUNTDOWN_IS_WORKING: "false",
    SMART_PANELGRID_COLUMN:2,
    PRODUCT_API:{
        GET_PRODUCT_BY_CODE_VERSION:"product/"
    },
    POLICY_API:{
        CREATE_POLICY:"public/orchestration/dispatch/nova_newbiz_Quoting",
        SAVE_POLICY:'public/orchestration/dispatch/nova_newbiz_SavePolicy',
        CALCULATE:'public/orchestration/dispatch/nova_newbiz_Calculate',
        BIND_POLICY:'public/orchestration/dispatch/nova_newbiz_Binding',
        ISSUE_POLICY:'public/orchestration/dispatch/nova_newbiz_Issue',
        QUERY_POLICY:'public/ap00/query/entity',
        LOAD_POLICY:'pa/policy/',
        DOWNLOAD_POLICY:'pa/nova/policy/downLoadJson/policyId/'
    },
    HOME_API:{
        "POLICY_BAR":'pa/nova/policy/recent/policyBarList',
        "POLICY_LINE":'pa/nova/policy/recent/policyPremiumList',
        "WORK_LIST":"pa/nova/policy/policyBarList"
    }

}
