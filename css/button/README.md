# 按钮

> CSS 按钮效果


<style>
.code-block
{
    margin-top: 20px;
}
</style>

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

## 果冻

:::demo 果冻抖动效果+渐变背景模拟的渐变边框~~ ^_^
<template>
    <button class="jelly-btn">流君酱</button>
</template>

<style lang="stylus">
$primary-color = #66b1ff

.jelly-btn
    border none
    padding 0 20px
    height 40px
    line-height 40px
    cursor pointer
    outline none
    color #383838
    background linear-gradient(#fff,#fff) 1px 1px / 78px 38px, linear-gradient(135deg, #bd328f 0%, #bd328f 18%, #2976ab 42%, #292f75 62%, #bd328f 82%, #bd328f 100%) 
    background-repeat no-repeat
    
    &:hover
        animation: jelly .3s

@keyframes jelly
    0%,
    100 
        transform scale(1,1)
    33%
        transform scale(.9,1.1)
    66%
        transform scale(1.1,.9)
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