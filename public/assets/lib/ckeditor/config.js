
CKEDITOR.editorConfig = function( config ) {
	config.language = 'zh-cn';
	// config.uiColor = '#AADC6E';
  config.extraPlugins += (config.extraPlugins ? ',FMathEditor': 'FMathEditor');
};
