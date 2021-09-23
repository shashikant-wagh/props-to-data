const isEqualsTo = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const sanitize = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

export default {
    data() {
        return {
            propsToData: {}
        };
    },

    methods: {
        getNormalizedValue(value) {
            if (value === null) {
                return value;
            }
            return sanitize((typeof value === 'number' ? value : (value || '')));
        },

        propWatchHandler(newValue, dataEntry) {
            if (
                newValue !== null
                && newValue !== undefined
                && isEqualsTo(newValue, this.$data[dataEntry])
            ) {
                return;
            }

            this.$set(this.$data, dataEntry, this.getNormalizedValue(newValue));
        },

        dataWatchHandler(newValue, propEntry) {
            if (
                newValue !== null
                && newValue !== undefined
                && isEqualsTo(newValue, this[propEntry])
            ) {
                return;
            }

            this.$emit('input', this.getNormalizedValue(newValue));
        },

        registerWatchers() {
            Object.entries(this.propsToData).map(([propEntry, dataEntry]) => {
                this.$watch(propEntry, (newValue) => this.propWatchHandler(newValue, dataEntry), {
                    immediate: true,
                    deep: true
                });

                this.$watch(dataEntry, (newValue) => this.dataWatchHandler(newValue, propEntry), {
                    deep: true
                });
            });
        }
    },

    created() {
        this.registerWatchers();
    },
};
