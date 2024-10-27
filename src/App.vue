<script setup>
import { ref } from "vue";
import Unit from "./components/Unit.vue"

const data = ref([[[{}], [{}], [{}]], [[{}], [{}], [{}]]]);
const elem = { D: 100, d: 50, Sk: 300 };


const agregat = {
    silnik1: {
        pompa1: {
            rozdzielacz1: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz2: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz3: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            }
        },
        pompa2: {
            rozdzielacz1: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz2: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz3: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            }
        },
        pompa3: {
            rozdzielacz1: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz2: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz3: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            }
        }
    },
    silnik2: {
        pompa1: {
            rozdzielacz1: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz2: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz3: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            }
        },
        pompa2: {
            rozdzielacz1: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz2: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz3: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            }
        },
        pompa3: {
            rozdzielacz1: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz2: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            },
            rozdzielacz3: {
                silownik1: {
                    D: 100, d: 60, L: 250,
                },
                silownik2: {
                    D: 100, d: 60, L: 250,
                },
                silownik3: {
                    D: 100, d: 60, L: 250,
                }
            }
        }
    }
};
</script>

<template>
    <div class="app">
        <Unit />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}
.app {
    background-color: rgba(0, 66, 25, 0.5);
    padding: 10px;
    width: 100vw;
    height: 100vh;
    /* display: grid;
    grid-template-columns: 40vw 60vw; */
}
</style>
