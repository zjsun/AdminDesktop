<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">

            <!-- Sidebar user panel (optional) -->
            <!--<div class="user-panel">
                <div class="pull-left image">
                    <img :src="avatar" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>超级管理员</p>
                    &lt;!&ndash; Status &ndash;&gt;
                    <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
                </div>
            </div>-->

            <!-- search form (Optional) -->
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="输入关键字搜索">
                    <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
                </div>
            </form>
            <!-- /.search form -->

            <!-- Sidebar Menu -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">工作台</li>
                <!-- Optionally, you can add icons to the links -->
                <router-link tag="li" to="/">
                    <a><i class="fa fa-dashboard"></i> <span>桌面</span></a>
                </router-link>
                <router-link tag="li" to="/link2">
                    <a><i class="fa fa-link"></i> <span>链接2</span></a>
                </router-link>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-link"></i> <span>多级</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <router-link tag="li" to="/link21"><a>链接21</a></router-link>
                        <router-link tag="li" to="/link22"><a>链接22</a></router-link>
                    </ul>
                </li>
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    export default {
        name: 'MainSidebar',
        data(){
            return {
                avatar: require('admin-lte/dist/img/avatar5.png')
            }
        }
    }
</script>