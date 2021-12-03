<template>
    <v-app id="inspire">
        <v-main style="padding: 0; ">
            <v-container class="py-8 px-6" fluid>
                <v-row>
                    <v-col v-for="card in cards" :key="card" cols="12" >
                        <v-card>
                            <v-subheader style="font-size: larger"><h2 style="margin: 20px; margin-top: 50px;">{{ card }}</h2></v-subheader>
                            <v-list two-line>
                                <template v-for="(item, i) in myMsgs">
                                    <v-list-item :key="i" >
                                        <v-list-item-avatar :color="item.color">
                                            {{item.title.charAt(0)}}
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                                            <v-list-item-subtitle>
                                               {{item.time}}
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    
                                    <v-divider v-if="i !== myMsgs.length-1" :key="`divider-${n}`" inset></v-divider>
                                </template>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>


<script>
    export default {
        name: "Handle",
        data: () => ({
            cards: ['公告', '通知'],
            links: [
                ['mdi-inbox-arrow-down', 'Inbox'],
                ['mdi-send', 'Send'],
                ['mdi-delete', 'Trash'],
                ['mdi-alert-octagon', 'Spam'],
            ],
            myMsgs:[
                {color:"amber darken-2", title: "广东省2022届高校毕业生“校园招聘月”大型网络招聘活动——北京师范大学珠海分校专场邀请函", time:"2021-11-26"},
                {color:"light-green", title: "校工会关于2021年第五届“先进基层工会组织”、“优秀工会干部”、“优秀工会积极分子”、“工会工作突出贡献人物”等评选结果的公示", time:"2021-11-30"},
                {color:"light-blue lighten-1", title: "关于燕华苑、海华苑、京华苑和粤华苑等宿舍更换电表及相关注意事项的通知", time:"2021-12-01"},
                {color:"red lighten-1", title: "关于我校2021年省级质量工程项目推荐名单公示", time:"2021-11-24"},
                {color:"indigo accent-2", title: "国际商学部“木铎·励商”名家讲坛第15期预告", time:"2021-11-26"},
                {color:"brown lighten-3", title: "珠海新闻:全省新闻战线第八届“好记者讲好故事”巡讲活动走进珠海", time:"2021-12-03"},
                {color:"blue-grey", title: "南方日报:珠海大学生参与生态文明建设有了创新平台", time:"2021-12-02"},
            ],
            
        }),
    }
</script>

<style scoped>

</style>
