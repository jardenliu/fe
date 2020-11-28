# 观察者

## ResizeObserver
- 观察元素内容或者边框
::: demo

<template>
    <div class="resize-observer-target">
        <h4>ResizeObserver</h4>
        <p>width: {{width}}px</p>
    </div>
</template>

<script>

export default {
    data(){
        return {
            width: 0
        }
    },
    mounted(){
        const target = document.querySelector('.resize-observer-target')
        this.width  = target.getBoundingClientRect().width
        const resizeObs = new ResizeObserver((entries,observer)=>{
            entries.map(entry=>{
                this.width  = entry.contentRect.width
            })
        })
        resizeObs.observe(target)

        let width  = 300

        setInterval(()=>{
            width += 20
            width = width > 500 ? 300 : width

            target.style.width = `${width}px`
        }, 500)

    }
}

</script>


<style lang="stylus">
.resize-observer-target
    width 100px
    height 400px
    background #f5f5f5
    display flex
    justify-content center
    align-items center
    flex-direction column

</style>

:::