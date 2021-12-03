<template>
    <div>
        <el-card shadow="always" style="margin: 20px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/WorkSpace' }">工作台</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/TableUser">表格管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>攻略管理</el-breadcrumb-item>
            </el-breadcrumb>
            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <h1 style="margin-top: 10px">Table-Guide</h1>
                </div></el-col>
                <el-col :span="19"><div class="grid-content bg-purple-light">
                    <myFind/>
                </div></el-col>
            </el-row>
        </el-card>
        
        <el-card shadow="always" style="margin: 20px">
            <v-data-table :headers="headers" :items="guides" sort-by="calories">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>攻略表</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" dark class="mb-2">刷新</v-btn>
                                <div style="width: 10px"></div>
                                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                    新建攻略
                                </v-btn>
                            </template>
                            
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>
                                
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.guide_id" label="攻略id">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.nickname" label="昵称">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.content" label="内容">
                                                </v-text-field>
                                            </v-col>
                                            
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.hot" label="热度">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.see" label="点击数">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.reply" label="评论数">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.image" label="图片">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <el-date-picker v-model="editedItem.date" type="datetime" label="时间">
                                                </el-date-picker>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">取消</v-btn>
                                    <v-btn color="blue darken-1" text @click="save">确定</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card style="padding: 20px">
                                <v-card-title class="text-h5">确定删除改行程？</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">
                                        取消
                                    </v-btn>
                                    
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                                        确定
                                    </v-btn>
                                    
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)">
                        mdi-pencil
                    </v-icon
                    >
                    <v-icon small @click="deleteItem(item)"> mdi-delete</v-icon>
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="my_init"> Reset</v-btn>
                </template>
            </v-data-table>
        </el-card>
    </div>
</template>


<script>
    // import Qs from 'qs'
    import myFind from "@/components/server/Find";
    
    export default {
        components: {
            myFind,
        },
        data: () => ({
            dialog: false,
            dialogDelete: false,
            headers: [
                {
                    text: "攻略id",
                    align: "start",
                    sortable: true,
                    value: "guide_id",
                },
                {
                    text: "昵称",
                    value: "nickname",
                },
                {
                    text: "内容",
                    value: "content",
                },
                {
                    text: "时间",
                    value: "date",
                },
                {
                    text: "热度",
                    value: "hot",
                },
                {
                    text: "点击数",
                    value: "see",
                },
                {
                    text: "评论数",
                    value: "reply",
                },
                {
                    text: "图片",
                    value: "image",
                },
                {text: "操作", value: "actions", sortable: false},
            ],
            guides: [],
            editedIndex: -1,
            editedItem: {
                "guide_id": "",
                "nickname": "昵称",
                "content": "内容",
                "date": "2021-12-02 15:10:45",
                "hot": 100,
                "see": 100,
                "reply": 100,
                "image": "图片"
            },
            defaultItem: {
                "guide_id": "",
                "nickname": "昵称",
                "content": "内容",
                "date": "2021-12-02 15:10:45",
                "hot": 100,
                "see": 100,
                "reply": 100,
                "image": "图片"
            },
        }),
        
        computed: {
            formTitle() {
                return this.editedIndex === -1 ? "新建" : "修改";
            },
        },
        
        watch: {
            dialog(val) {
                val || this.close();
            },
            dialogDelete(val) {
                val || this.closeDelete();
            },
        },
        
        created() {
            this.my_init();
        },
        
        methods: {
            my_success() {
                this.$message({
                    message: "恭喜你，这是一条成功消息",
                    type: "success",
                });
            },
            my_error() {
                this.$message({
                    message: "错了哦，这是一条错误消息",
                    type: "error",
                });
            },
            my_init() {
                // 初始化表格数据
                // 从后台获取数据
                this.$http.get("guide/getAllGuide").then((res) => {
                    this.guides = res.data;
                });
            },
            
            my_add() {
                let myGuide = new URLSearchParams();
                const guide = this.editedItem;
                // var ta = guide.start_time;
                myGuide.append("nickname", guide.nickname);
                myGuide.append("content", guide.content);
                myGuide.append("date", guide.date);
                myGuide.append("hot", guide.hot);
                myGuide.append("see", guide.see);
                myGuide.append("reply", guide.reply);
                myGuide.append("image", guide.image);
                console.log(guide);
                this.$http.post(`guide/addGuide`, myGuide).then((res) => {
                    console.log("res.data-res.data-res.data");
                    console.log(res.data);
                    if (res.data.insertId > 0) {
                        this.$message({
                            message: "添加成功",
                            type: "success",
                        });
                    } else {
                        this.$message({
                            message: "添加失败",
                            type: "error",
                        });
                    }
                    this.my_init();
                });
            },
            
            my_update() {
                let myGuide = new URLSearchParams();
                const guide = this.editedItem;
                myGuide.append("guide_id", guide.guide_id);
                myGuide.append("nickname", guide.nickname);
                myGuide.append("content", guide.content);
                myGuide.append("date", guide.date);
                myGuide.append("hot", guide.hot);
                myGuide.append("see", guide.see);
                myGuide.append("reply", guide.reply);
                myGuide.append("image", guide.image);
                console.log(guide);
                this.$http.post(`guide/updateGuideById`, myGuide).then((res) => {
                    console.log(res.data);
                    if (res.data.changedRows > 0) {
                        this.$message({
                            message: "修改成功",
                            type: "success",
                        });
                    } else {
                        this.$message({
                            message: "修改失败",
                            type: "error",
                        });
                    }
                    this.my_init();
                });
            },
            
            my_deleteId() {
                console.log("deleteById-deleteById-deleteById-deleteById");
                let myGuideId = new URLSearchParams();
                let uid = this.editedItem.guide_id;
                myGuideId.append("guide_id", uid);
                console.log(uid);
                this.$http.post(`guide/deleteById`, myGuideId).then((res) => {
                    console.log(res.data);
                    if (res.data.affectedRows > 0) {
                        this.$message({
                            message: "删除成功",
                            type: "success",
                        });
                    } else {
                        this.$message({
                            message: "删除失败",
                            type: "error",
                        });
                    }
                    this.my_init();
                });
            },
            
            editItem(item) {
                this.editedIndex = this.guides.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true;
            },
            
            deleteItem(item) {
                this.editedIndex = this.guides.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialogDelete = true;
            },
            
            deleteItemConfirm() {
                // this.guides.splice(this.editedIndex, 1);
                this.closeDelete();
                // console.log(this.editedItem);
                this.my_deleteId();
            },
            
            close() {
                this.dialog = false;
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                });
            },
            
            closeDelete() {
                this.dialogDelete = false;
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                });
            },
            
            save() {
                if (this.editedIndex > -1) {
                    // Object.assign(this.guides[this.editedIndex], this.editedItem);
                    console.log("my_updateId-my_updateId");
                    this.my_update();
                } else {
                    console.log("addGuide-addGuide-addGuide-addGuide");
                    this.my_add();
                    // this.guides.push(this.editedItem);
                }
                this.close();
            },
        },
    };
</script>
