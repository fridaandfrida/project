<template>
    <div id="list">
        <search></search>
        <list-detail @resHandler='handlerAddRes'></list-detail>
        <a-table bordered :pagination='false' :dataSource="dataSource" :rowKey="(v) => v.id" :columns="columns">
            <template slot="operation" slot-scope="text, record, index">
                          <div class='editable-row-operations'>
                            <span>
                              <a @click="() => check(record)">查看详情</a>&nbsp;
                              <a-popconfirm title='确认删除吗?' @confirm="() => cancel(record)">
                                <a>删除</a>
                              </a-popconfirm>
                            </span>                
                          </div>
</template>
        </a-table>
        <div id="components-pagination-demo-mini" style="margin-top:30px;text-align:right;">
            <a-pagination size="small" @showSizeChange="toShowSizeChange" @change="onChange"  :total="total" showSizeChanger showQuickJumper :showTotal="total => `Total ${total} items`" />
        </div>
    </div>
</template>


<script>
import Search from './Search.vue'
import ListDetail from './ListDetail.vue'
import api_server from '../api/server.js'
export default {
    name: 'list',
    props: {},
    data() {
        return {
            total: 0,
            page: 1,
            size: 10,
            dataSource: [],
            count: this.total,
            columns: [{
                title: '用户名',
                dataIndex: 'username',
                width: '30%',
                scopedSlots: { customRender: 'username' },
            }, {
                title: 'title',
                dataIndex: 'title',
            }, {
                title: 'realName',
                dataIndex: 'realName',
            }, {
                title: '是否启用',
                dataIndex: 'enabled',
            }, {
                title: 'mobile',
                dataIndex: 'mobile',
                scopedSlots: { customRender: 'mobile' },
            }, {
                title: 'email',
                dataIndex: 'email',
            }, {
                title: 'operation',
                dataIndex: 'operation',
                scopedSlots: { customRender: 'operation' },
            }],
        }
    },
    created() {
        this.channelAjax();
    },
    methods: {
        channelAjax() {
            let _this = this;
            const params = {
                page: this.page,
                size: this.size
            };
            api_server.allChannel(params).then(res => {
                if (res.data.status === 200) {
                    let data = res.data.body.data;
                    _this.dataSource = data;
                    this.total = res.data.body.total;
                }
            }).catch(e => {});
        },
        // testData(v) {return v.id;},
        handlerAddRes() {
            console.log(1222222)
            this.channelAjax();
        },
        check(key) {
            const id = { id: key.id };
            if (key.id) {
                api_server.checkUserId(id).then(res => {
                    if (res.data.status === 200) {
                        console.log('checkUserId', id, res)
                    }
                }).catch(e => {});
                // api_server.updateUser(key).then(res => {
                //     console.log('updateUser',id,res)
                // }).catch(e => {});
            }
        },
        cancel(key) {
            const id = { id: key.id };
            if (key.id) {
                api_server.deleteUser(id).then(res => {
                    if (res.data.status === 200) {
                        this.channelAjax();
                    }
                }).catch(e => {});
            }
        },
        onChange(page, pageSize) {
            this.page = page;
            this.size = pageSize;
            this.channelAjax();
        },
        toShowSizeChange(current, size) {
            this.page = current;
            this.size = size;
            this.channelAjax();
        }
    },
    components: {
        Search,
        ListDetail
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
    margin-bottom: 24px;
}

.editable-cell {
    position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
    padding-right: 24px;
}

.editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
}

.editable-cell-icon {
    line-height: 18px;
    display: none;
}

.editable-cell-icon-check {
    line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
    display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
    color: #108ee9;
}

.editable-add-btn {
    margin-bottom: 8px;
}
</style>
