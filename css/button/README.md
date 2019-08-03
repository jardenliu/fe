# 按钮

> Css 按钮效果

## 滑箱

:::demo
<template>
    <button class="slidebox-btn">流君酱</button>
</template>

<style lang="stylus">

$primary-color = #409EFF
$primary-color-lighter = #66b1ff

.slidebox-btn
    border none
    padding 0 20px
    height 40px
    line-height 40px
    cursor pointer
    border-radius 4px
    outline none
    color #fff
    transition 0.3s
    background linear-gradient($primary-color, 0%, $primary-color, 50%, $primary-color-lighter, 50%, $primary-color-lighter) 
    background-size 100% 200%
    
    &:hover
        background-position-y 100%
</style>

:::
