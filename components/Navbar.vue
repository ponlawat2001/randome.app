<template>
    <div class="container">
        <div class="nav">
            <img class="logo"
                src="https://cdn.vectorstock.com/i/1000v/37/87/valorant-game-logo-icon-eps-10-gaming-streamer-vector-33193787.jpg">
            <div class="navbutton">
                <button @click="Navto('/wheel')">Wheel</button>
                <button @click="Navto('/roll')">Roll</button>
                <button @click="Navto('/numeric')">Numeric</button>
            </div>

        </div>
        <div class="menu">
            <Icon class="searchicon" icon="material-symbols:search" />
            <Icon class="web" icon="mdi:web" />
            <button class="signin" @click="Navto('/login')">ลงชื่อเข้าใช้</button>
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
.container {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    height: 60px;
    background-color: black;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.50);
    -webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.50);
    -moz-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.50);

    .nav {
        display: flex;
        align-items: center;
        gap: 16px;
        
        .logo {
            width: 24px;
            height: 24px;
        }

        .navbutton {
            display: flex;
            gap: 4px;
            button {
                border: none;
                background-color: transparent;
                color: white;
                padding: 8px 16px;
                &:hover {
                    background-color: gray;
                    border-radius: 12px;
                }
            }

            

        }
    }


    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;

        .searchicon {
            cursor: pointer;
            color: white;
            width: 24px;
            height: 24px;
            &:hover{
                background-color: gray;
                padding: 4px;
                border-radius: 4px;
            }
        }

        .web {
            cursor: pointer;
            color: white;
            width: 24px;
            height: 24px;
            &:hover{
                background-color: gray;
                padding: 4px;
                border-radius: 4px;
            }
        }

        .signin {
            border: none;
            cursor: pointer;
            align-items: center;
            background: rgb(255, 125, 102);
            background: linear-gradient(307deg, rgba(255, 125, 102, 1) 0%, rgba(255, 0, 0, 1) 100%);
            border-radius: 12px;
            padding: 8px 16px;
            color: black;
            &:hover {
                color: white;
            }
        }

    }
}
</style>