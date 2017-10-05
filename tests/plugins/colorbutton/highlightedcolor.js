/* bender-tags: editor */
/* bender-ckeditor-plugins: colorbutton,toolbar,wysiwygarea */

( function() {
	'use strict';

	bender.editor = true;

	bender.test( {
		'test highlighted color in color pallete': function() {
			var editor = this.editor,
				bot = this.editorBot,
				txtColorBtn = editor.ui.get( 'TextColor' );

			bot.setHtmlWithSelection( '[<h1 style="color: #000000; background: #999999">Moo</h1>]' );
			txtColorBtn.click( editor );
		}
	} );
} )();
