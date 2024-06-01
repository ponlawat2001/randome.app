<template>
    <div class="container">
        <div class="nav">
            <img class="logo" src="https://cdn.vectorstock.com/i/1000v/37/87/valorant-game-logo-icon-eps-10-gaming-streamer-vector-33193787.jpg">
            <div class="navbutton">
                <button @click="Navto('/wheel')">Wheel</button>
                <button @click="Navto('/wheel')">Roll</button>
                <button @click="Navto('/wheel')">Numeric</button>
            </div>
            
        </div>
        <div class="menu">
            <Icon class="searchicon" icon="material-symbols:search"/>
            <Icon class="web" icon="mdi:web"  />
            <button @click="Navto('/wheel')">Numeric</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'

export default {
    components: {
        Icon
    },

    methods: {
        Navto(path: string) {
            return navigateTo(path);
        }
    }

}
</script>

<style lang="scss" scoped>

.navbutton{
    display: flex;
    gap: 4px;
}

.searchicon{
    color: white;
    width: 24px;
    height: 24px;
    background-color: gray;
    border-radius: 8px;
    padding: 4px;
}

.web{
    color: white;
    width: 24px;
    height: 24px;
    padding: 4px;
}

.logo{
    width: 24px;
    height: 24px;
}

.container {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    height: 60px;
    background-color: black;
}

.menu {
    display: flex;
    align-items: center;
    
}

.nav {
    display: flex;
    align-items: center;
    gap: 16px;

    button {
        border: none;
        background-color: transparent;
        color: white;
        padding: 8px 16px;

        &:hover {
            background-color: lightgray;
            border-radius: 8px;
        }
    }
}
</style>