<template>
  <span class="blender-version-text">
    {{ version }}
  </span>
</template>

<script>
export default {
  name: "blenderVersion",
  data() {
    return { version: "" };
  },
  props: {
    isShort: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  async mounted() {
    // https://api.github.com/repos/blender/blender/releases/latest
    const data = await fetch(
      "https://api.github.com/repos/blender/blender/tags"
    );
    const versions = await data.json();
    this.version = versions[0].name.slice(1);
    if (this.isShort) {
      this.version = this.version.slice(0, 3);
    }
  },
};
</script>

<style></style>
