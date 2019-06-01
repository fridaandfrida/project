<template>
    <div class="formList">
        
    </div>
</template>

<script>
import api_server from '../api/server.js'
export default {
    name: 'FormList',
    data() {
        return {
            formLayout: 'horizontal',
            form: this.$form.createForm(this),
            values: ''

        }
    },
    created() {
        console.log(this.isSeen)
        // this.visible = this.isSeen;
    },
    methods: {
        handleSubmit(e) {
            console.log(this.username, this.title)
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    // thir.values = values;
                    this.formData(values);
                    console.log('Received values of form: ', values);
                }
            });
        },
        handleSelectChange(value) {
            console.log(value);
            this.form.setFieldsValue({
                note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
            });
        },

        formData(values) {
            let _this = this;
            api_server.formdata(values).then(res => {
                // let data = res.data.data;
                console.log(res);
                // _this.channeldata = data;
                // for (let i = 0; i < data.length; i++) {
                //   _this.channel.push(data[i].channelName);
                // }

                // let data = res.data;
                // if (data.code === '200') {
                //   _this.channel = [];
                //   _this.channelAjax();
                // }
            }).catch(e => {});
        },
    },
    props: {
        isSeen: Boolean
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
