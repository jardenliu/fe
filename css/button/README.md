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


## 脉冲

::: demo
<template>
    <button class="pulse-btn">流君酱</button>
</template>

<style lang="stylus">
$primary-color = #409EFF
$primary-color-lighter = #66b1ff
.pulse-btn
    border none
    padding 0 20px
    height 40px
    line-height 40px
    cursor pointer
    border-radius 4px
    transition 0.3s
    color #fff
    outline none
    background $primary-color

    &:hover
        animation  pulse 0.5s

@keyframes pulse
    0%
        box-shadow 0px 0px 0px 0px #fff, 0px 0px 0px 0px rgba($primary-color-lighter, 1)

    100%
        box-shadow 0px 0px 0px 7px #fff, 0px 0px 5px 10px rgba($primary-color-lighter, 0)


</style>
:::