<!-- Duplicate this File for new component creation -->
<template>
    <div class="component-container">
        <!-- Component Markup Here -->
    </div>
</template>

<script>
    export default  {
        name: 'componentName',
        components: {},
        props: [],
        mounted() {
            this._initComponent();
        },
        data() {
            return {}
        },
        methods: {
            // Initialize Component
            _initComponent() {}
        },
        computed: {

        }
    }
</script>