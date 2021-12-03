<!--  -->
<template>
    <div>
    
    </div>
</template>

<script>
    
    export default {
        //import引入的组件需要注入到对象中才能使用
        components: {},
        data() {
            //这里存放数据
            return {
                visualMap: [
                    {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 0,
                        min: 0,
                        max: 400
                    },
                    {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 1,
                        dimension: 0,
                        min: 0,
                        max: dateList.length - 1
                    }
                ],
                title: [
                    {
                        left: 'center',
                        text: 'Gradient along the y axis'
                    },
                    {
                        top: '55%',
                        left: 'center',
                        text: 'Gradient along the x axis'
                    }
                ],
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: [
                    {
                        data: dateList
                    },
                    {
                        data: dateList,
                        gridIndex: 1
                    }
                ],
                yAxis: [
                    {},
                    {
                        gridIndex: 1
                    }
                ],
                grid: [
                    {
                        bottom: '60%'
                    },
                    {
                        top: '60%'
                    }
                ],
                series: [
                    {
                        type: 'line',
                        showSymbol: false,
                        data: valueList
                    },
                    {
                        type: 'line',
                        showSymbol: false,
                        data: valueList,
                        xAxisIndex: 1,
                        yAxisIndex: 1
                    },
                ]
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {},
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
        
        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {
        
        },
    }
</script>
<style scoped>

</style>

