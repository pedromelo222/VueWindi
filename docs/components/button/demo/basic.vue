
<script setup lang="ts">
import { WButton } from "../../../../src"
</script>

<template> 
    <div class="flex flex-wrap items-center gap-3">
     <!-- #region snippet -->
        <WButton>Primary</WButton>
        <WButton loading>Loading</WButton>
        <WButton disabled>Disabled</WButton>
        <WButton pills>Primary pills</WButton>
        <WButton variant="outline">Outline</WButton>
        <WButton variant="link">Link</WButton>
     <!-- #endregion snippet -->

    </div>
</template>