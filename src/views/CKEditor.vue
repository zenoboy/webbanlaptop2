<template>
    <ck-editor></ck-editor>
</template>

<script>
import CkEditor from "../components/CKEditor.vue"
    export default {
        name: 'app',
        components:{
            CkEditor
        },
        data() {
            return {
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }
    }
</script>
