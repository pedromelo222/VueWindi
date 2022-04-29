
<script setup lang="ts">
import { WButton } from "../../../../src"
</script>

<template>
    <div class="flex flex-wrap items-center gap-3">
        <!-- #region snippet -->
        <WButton tag="a" href="/" variant="link" >Home </WButton>
        <WButton tag="RouterLink" to="/components/button">Secondary </WButton>
        <!-- #endregion snippet -->
    </div>
</template>