<template>
    <el-card shadow="always" style="margin: 20px">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/WorkSpace' }">工作台</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/TableUser">表格管理</a></el-breadcrumb-item>
            <el-breadcrumb-item id="logo">{{ logo }}</el-breadcrumb-item>
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
</template>
<script>
    export default {
        data: () => ({
            props: ['logo']
        })
    }
</script>

