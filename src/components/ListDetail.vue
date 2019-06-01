<template>
    <div class="listDetail">
        <a-button type="primary" @click="showDrawer">
            添加
        </a-button>
        <a-drawer :width="500" title="添加人员" placement="right" :closable="false" @close="onClose" :visible="visible">
            <a-form :form="form" @submit="handleSubmit">
                <a-form-item label="用户名" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input v-decorator="['username', {rules: [{ required: true, message: 'Please input your note!' }]}]" />
                </a-form-item>
                <a-form-item label="职称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input v-decorator="['title', {rules: [{ required: true, message: 'Please input your note!' }]}]" />
                </a-form-item>
                <a-form-item label="真实姓名" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input v-decorator="['realName', {rules: [{ required: true, message: 'Please input your note!' }]}]" />
                </a-form-item>
                <a-form-item label="密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input v-decorator="['password', {rules: [{ required: true, message: 'Please input your note!' }]}]" />
                </a-form-item>
                <a-form-item label="手机号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input v-decorator="['mobile', {rules: [{ required: true, message: 'Please input your note!' }]}]" />
                </a-form-item>
    
                <a-form-item label="是否启用">
                    <a-radio-group v-decorator="['enabled']">
                        <a-radio :value="true">
                            是
                        </a-radio>
                        <a-radio :value="false">
                            否
                        </a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item label="邮箱" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input v-decorator="['email', {rules: [{ required: true, message: 'Please input your note!' }]}]" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                    <a-button :style="{marginRight: '8px'}" @click="onClose">
                        取消
                    </a-button>
                    <a-button type="primary" html-type="submit">
                        保存
                    </a-button>
                </a-form-item>
            </a-form>
        </a-drawer>
        <a-button @click="success">Success</a-button>
    </div>
</template>

<script>
import api_server from '../api/server.js'
export default {
    name: 'ListDetail',
    data() {
        return {
            visible: false,
            formLayout: 'horizontal',
            form: this.$form.createForm(this),
            values: ''
        }
    },
    created() {
        // this.success();
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.addUser(values);
                }
            });
        },

        // channelAjax() {
        //     let _this = this;
        //     api_server.allChannel().catch(e => {});
        // },
        handleSelectChange(value) {
            this.form.setFieldsValue({
                note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
            });
        },
        addUser(values) {
            let _this = this;
            api_server.toSubmitFormdata(values).then(res => {
                if (res.data.status === 200) {
                    console.log(333333)
                    this.$emit('resHandler');
                    this.success();
                }
            }).catch(e => {});
        },
        showDrawer() {
            this.visible = true
        },
        onClose() {
            this.visible = false
        },
        success() {
            
            this.$message.info('成功！');
        },
        error() {
            this.$message.error('失败！');
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
