# 滚动

> 滚动相关的css

## Snap

- 纯css实现简单swiper (上下滑动)

::: demo

<template>
    <ul class="swiper">
        <li class="block">1</li>
        <li class="block">2</li>
        <li class="block">3</li>
        <li class="block">4</li>
        <li class="block">5</li>
    </ul>
</template>

<style lang="stylus">
.swiper
    list-style-type none
    height 100px
    overflow auto
    display flex
    flex-direction column
    padding 0
    width 100px
    scroll-snap-type y mandatory

.block
    width 100px
    height 100px
    display flex
    flex-shrink 0
    align-items center
    justify-content center
    scroll-snap-align start
    &:nth-child(1)
        background red
    &:nth-child(2)
        background pink
    &:nth-child(3)
        background green
    &:nth-child(4)
        background blue
    &:nth-child(5)
        background yellow
</style>

:::
