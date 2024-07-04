<template>
    <div class="blind" @click.self="closedrawer">
    <div class="drawer">
        <div class="drawer-content">
            <div class="drawer-header">
                <h2>Drawer Header</h2>

            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data (){
        return{

        }
    },
    methods:{
        closedrawer(){
            this.$emit('closedrawer');
    }
    }
}
</script>

<style scoped>
.drawer{
    position:fixed;
    top:0;
    left:0;
    height: 100vh;
    width: 25vw;
    background-color: #f0f0f0;
    border-radius: 0px 25px 25px 0px;
}
.blind{
    position: fixed;
    margin-left: 0px;
    margin-top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1000;

}
</style>