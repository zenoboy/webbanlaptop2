<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import { defineComponent, ref } from '@vue/runtime-core';
    export default defineComponent( {
        setup() {
            const editorData = ref("<p>Content of the editor.</p>");

            const uploader = (editor) =>{
                editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
                    return new MyUploadAdapter( loader );
                };
            };

            return {
                editor: ClassicEditor,
                editorData,
                editorConfig:{

                }
            };
        }


        
    });
</script>
