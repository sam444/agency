const defaultSettings = require('./defaults');
const configUrl = defaultSettings.srcPath+'/config/config.json';
const config = require(configUrl);
const http = require('http');
const args = process.argv.splice(1);
const moduleId = args[1].split('=')[1];
const fs = require('fs');

http.get(config['I18N_SERVICE']+'/i18n/language/list',function(req,res){  
    let languages='';  
    req.on('data',function(data){  
        languages+=data;  
    });  
    req.on('end',function(){  
        const languagesObject = JSON.parse(languages);
        for(let language of languagesObject){
           
            buildLanguages(language);

        }
 
    });  
});

const buildLanguages = function(language){
            const translateURL='/i18n/translation/list/ui/byLangId?configGroup='+moduleId+'&langId='+language['LanguageId'];
            http.get(config['I18N_SERVICE']+translateURL,function(req,res){  
                    let contents='';  
                    req.on('data',function(content){  
                        contents+=content;  
                    });  
                    req.on('end',function(){  
                        let str = "module.exports ="+ formatJson(contents);
                        writejs(language,str);
                    });  
            });
}

const writejs = function(language,str){
                        const i18NPath = defaultSettings.srcPath+'/i18n/'+language['LanguageId']+'.js';

                        fs.writeFile(i18NPath, str, function(err){
                            if(err)
                                console.log("fail " + err);
                            else
                                console.log("写入"+language['LanguageId']+"文件ok");
                        });  
}

var formatJson = function(json, options) {
	var reg = null,
		formatted = '',
		pad = 0,
		PADDING = '    '; // one can also use '\t' or a different number of spaces
 
	// optional settings
	options = options || {};
	// remove newline where '{' or '[' follows ':'
	options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
	// use a space after a colon
	options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;
 
	// begin formatting...
	if (typeof json !== 'string') {
		// make sure we start with the JSON as a string
		json = JSON.stringify(json);
	} else {
		// is already a string, so parse and re-stringify in order to remove extra whitespace
		json = JSON.parse(json);
		json = JSON.stringify(json);
	}
 
	// add newline before and after curly braces
	reg = /([\{\}])/g;
	json = json.replace(reg, '\r\n$1\r\n');
 
	// add newline before and after square brackets
	reg = /([\[\]])/g;
	json = json.replace(reg, '\r\n$1\r\n');
 
	// add newline after comma
	reg = /(\,)/g;
	json = json.replace(reg, '$1\r\n');
 
	// remove multiple newlines
	reg = /(\r\n\r\n)/g;
	json = json.replace(reg, '\r\n');
 
	// remove newlines before commas
	reg = /\r\n\,/g;
	json = json.replace(reg, ',');
 
	// optional formatting...
	if (!options.newlineAfterColonIfBeforeBraceOrBracket) {			
		reg = /\:\r\n\{/g;
		json = json.replace(reg, ':{');
		reg = /\:\r\n\[/g;
		json = json.replace(reg, ':[');
	}
	if (options.spaceAfterColon) {			
		reg = /\:/g;
		json = json.replace(reg, ':');
	}
 
    for(let node of json.split('\r\n')){
        var i = 0,
			indent = 0,
			padding = '';
 
		if (node.match(/\{$/) || node.match(/\[$/)) {
			indent = 1;
		} else if (node.match(/\}/) || node.match(/\]/)) {
			if (pad !== 0) {
				pad -= 1;
			}
		} else {
			indent = 0;
		}
 
		for (i = 0; i < pad; i++) {
			padding += PADDING;
		}
 
		formatted += padding + node + '\r\n';
		pad += indent;
    }
 
	return formatted;
};