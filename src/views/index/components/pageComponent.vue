<template>
	<div class="page">
        <span v-if="pageMax >= 1" class="page-block center" @click="prePage()">{{'«'}}</span>
        <span v-if="pageList[2]-2>1"
            class="page-block center">...</span>
        <span v-for="pageNum in pageList"
            :key="pageNum"
            class="page-block center"
            @click="jumpTargetPage(pageNum)"
            :class="{curPage: pageNum === page}">{{pageNum}}</span>
        <span v-if="pageMax-pageList[2]>2"
            class="page-block center">...</span>
        <span v-if="pageMax >= 1" class="page-block center" @click="nextPage()">{{'»'}}</span>
  </div>
</template>

<script>
    export default {
        name: 'Pager',
        props:{
            pageMax: Number
        },
        data () {
            return {
                page: 1, // 当前页码
                cur_page_max: this.pageMax >= 5 ? 5 : this.pageMax
            }
        },
        computed: {
            pageList() {
                let pageList = new Array()
                if(this.pageMax >= 5) {
                    for(let i = 1; i <= 5; i++) {
                        pageList.push(i)
                    }
                } else {
                    for(let i = 1; i <= this.pageMax; i++) {
                        pageList.push(i)
                    }
                }
                return pageList
            },
            curPageMax: {
                get() {
                    if(this.cur_page_max === undefined) {
                        return this.pageMax >= 5 ? 5 : this.pageMax
                    }
                    return this.cur_page_max
                },
                set(newVal) {
                    this.cur_page_max = newVal
                }
            }
        },
        methods: {
            prePage() {
                if(this.page == 1) {
                    alert("当前已经是第一页")
                } else {
                    this.page--
                    if(this.curPageMax - this.page >= 5) {
                        // 重新设置当前显示的页数
                        this.pageList.unshift(this.page)
                        this.pageList.pop(this.curPageMax)
                        this.curPageMax = this.curPageMax - 1
                    }
                    this.$emit('changePage', this.page)
                }
            },
            nextPage() {
                if(this.page == this.pageMax) {
                    alert("当前已经是最后一页了")
                } else {
                    this.page++
                    if(this.page - this.pageList[0] >= 5) {
                        // 重新设置当前显示的页数
                        this.pageList.shift()
                        this.pageList.push(this.page)
                        this.curPageMax = this.curPageMax + 1
                    }
                    this.$emit('changePage', this.page)
                }
            },
            jumpTargetPage(page) {
                this.page = page
                this.$emit('changePage', page)
            }
        }
    }
</script>

<style scoped>

    .curPage {
        background-color: #0066FF;
        color: #fff;
    }

    .page {
        margin-top: 20px;
        padding-left: 300px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #fff;
    }

    .page .center {
        text-align: center;
    }

    .page .page-block {
        display: inline-block;
        width: 30px;
        height: 30px;
        padding: 4px 8px;
        font-size: 0.8em;
        line-height: 20px;
        border: 1px solid #ddd;
        border-right: none;
        box-sizing: border-box;
    }

    .page .page-block:hover {
        cursor: pointer;
        background-color: #0066FF;
        color: #fff;
    }

    .page .page-block:first-child {
        width: 34px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .page .page-block:last-child {
        width: 34px;
        border-right: 1px solid #ddd;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
</style>