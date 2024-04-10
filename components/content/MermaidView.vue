<script setup lang="ts">
import mermaid from 'mermaid';
const mermaidRef = ref<HTMLElement | null>(null);
onMounted(() => {
  console.log('onMounted is called')
  nextTick((()=>{
    mermaid.init()
  }))
  mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' })
  console.log(mermaidRef.value)
  if (mermaidRef.value&&mermaidRef.value.textContent&&mermaidRef.value.innerHTML ) {
    const graphDefinition = mermaidRef.value.textContent.trim()
    const svgGraph = mermaid.mermaidAPI.render('graphDiv', graphDefinition, () => {})
    mermaidRef.value.innerHTML = svgGraph
  }
})
</script>
<template>
  <div ref="mermaidRef" class="mermaid">
    <slot />
  </div>
</template>
<style scoped>
.mermaid {
  background-color: black;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
}
</style>