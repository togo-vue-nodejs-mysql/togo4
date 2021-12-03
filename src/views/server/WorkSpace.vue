<template>
    <div style="margin: 10px">
        <el-container style=" margin: 10px; ">
            <el-card shadow="always" style="margin: 20px;  width: 100%; padding: 10px">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
                
                <el-row :gutter="30" style="width: 100%; margin-bottom: -30px;">
                    <el-col :span="14" style="margin-bottom: 10px">
                        <h1 style="margin: 10px">工作台</h1>
                        <div class="grid-content bg-purple">
                            <v-alert
                                text
                                outlined
                                color="deep-orange"
                                icon="mdi-fire"
                            >
                                <h4 style="color: #982e2e">togo文化让我们勇往直前，奋斗不息。</h4>
                                <h4 style="color: #982e2e">togo精神让我们开拓创新，追求发展。</h4>
                                Togo culture makes us move forward bravely and strive ceaselessly.<br/>
                                Togo spirit allows us to explore, innovate and pursue development.
                            </v-alert>
                        
                        </div>
                    </el-col>
                    <el-col :span="10" style="margin-top: 60px;">
                        <h3>目前进度</h3>
                        <div class="grid-content bg-purple-light">
                            <div style="display: inline-flex;  flex-direction: column;">
                                <el-progress width="80" style="margin-right: 20px;" type="circle" :percentage="30"
                                             status="success"></el-progress>
                                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;已完成</h5>
                            </div>
                            <div style="display: inline-flex;  flex-direction: column;">
                                <el-progress width="80" style="margin-right: 20px;" type="circle" :percentage="70"
                                             status="warning"></el-progress>
                                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;被退回</h5>
                            </div>
                            <div style="display: inline-flex;  flex-direction: column;">
                                <el-progress width="80" style="margin-right: 20px;" type="circle"
                                             :percentage="20"></el-progress>
                                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;待查阅</h5>
                            </div>
                            <div style="display: inline-flex;  flex-direction: column;">
                                <el-progress width="80" type="circle" :percentage="35" status="exception"></el-progress>
                                <h5>&nbsp;&nbsp;&nbsp;提交错误</h5>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-card>
        </el-container>
        
        <el-container style="margin: 10px">
            <el-row :gutter="20" style="width: 100%;">
                <el-col :span="16">
                    <div class="grid-content bg-purple">
                        <el-card shadow="always" style="margin-left: 20px">
                            <ChartLine ref="chart_line_one"/>
                        </el-card>
                    </div>
                    <div class="grid-content bg-purple">
                        <el-card shadow="always" style="margin-left: 20px">
                            <chart-move/>
                        </el-card>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <Chip/>
                    </div>
                </el-col>
            </el-row>
        
        </el-container>
    
    
    </div>
</template>

<script>
    import ChartLine from "@/components/server/partChart/chartLint";
    import Chip from "@/components/server/Chip.vue";
    import ChartMove from "@/components/server/partChart/chartMove";
    import echarts from '@/assets/js/echarts/CalendarCharts'; // 路径改成自己的

    
    export default {
        data() {
            return {
                name: "网站登陆人数",
                xData: ["2021-08", "2021-09", "2021-10", "2021-11", "2021-12"],
                yData: [30, 132, 80, 134, 232],
            };
        },
        mounted() {
            const {name, xData, yData} = this;
            console.log(this.$refs);
            this.$refs.chart_line_one.initChart(name, xData, yData);
        },
        components: {
            ChartMove,
            Chip,
            ChartLine,
        },
    };
</script>

<style>

</style>
