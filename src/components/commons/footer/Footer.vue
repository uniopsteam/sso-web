<template>
<div>
    <div class="footer">
        <footer class="main-footer">
            <!-- To the right -->
            <div class="pull-right hidden-xs">
                路漫漫其修远兮，吾将上下而求索
            </div>
            <!-- Default to the left -->
            <span class="foot_link">
                <a href="#">关于我们</a>
                <span>|</span>
                <a href="#">联系我们</a>
                <span>|</span>
                <a href="#">友情链接</a>
            </span>
            <strong>Copyright &copy; 2019 <a href="www.cqrcb.com">重庆农村商业银行科技信息部 系统管理中心</a>.</strong> 版权所有.
        </footer>
    </div>
</div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped> 
 .footer {
    display: flex;
    background-color: black;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 10 rgba(100, 100, 100, .1);
    justify-content:  center;
  }
  .footer p{
     float: center   
  }
</style>