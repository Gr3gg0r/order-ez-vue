<template>
  <ez-select
    ref="select"
    class="input-group"
    :name="name"
    :disabled="disabled"
    :isFullWidth="isFullWidth"
    :value="selected"
    :selected="selected"
    :label="label"
    :options="categories"
    @change="onChange"
  >
  </ez-select>
</template>

<script>
import EzSelect from "@/components/Select";

export default {
  components: {
    EzSelect,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    selected: {
      type: [Number, String, Object, Array],
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: false,
    },
    isParentDisabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
  },
  computed: {
    categories() {
      const categories =
        this.data
          ?.filter((obj) => obj.children.length > 0)
          ?.sort(this.sortByName)
          ?.map(({ children, ...rest }) => ({
            ...rest,
            children: children.sort(this.sortByName),
          })) ?? [];

      return categories;
    },
  },
  methods: {
    sortByName(a, b) {
      return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
    },

    onChange(value) {
      this.$emit("change", value);
    },
    reset() {
      this.$refs.select.reset();
    },
  },
};
</script>

<style scoped lang="scss">
:deep() .ez-select__display-container {
  height: 36px;
}
.ez-select__dropdown {
  li ul .ez-option {
    text-align: start;
    padding-left: 46px;
  }
}
</style>
