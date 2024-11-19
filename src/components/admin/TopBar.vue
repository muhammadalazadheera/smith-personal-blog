<template>
    <div class="fixed top-0 left-0 w-full h-14 shadow-sm shadow-gray-200 flex justify-end items-center px-4">
        <div class="">
            <button class="border p-2 rounded-sm hover:bg-gray-200 text-blue-500" @click="logout">Logout <img class="inline-block" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEfElEQVR4nO1aS4gcVRR9SfzGXyJI/KAEFReShdiSdN1XYy80Ev+KjBEDagRduhPcvb6vexw/qAz+IqIrN06iG11pUAQFRcRPskh00MQYEDGZMV331kQdn9yye9JdXT10V1d1T0sOPOjF+9zz3q37baVO4n8Kf+LYBdryvWD5RUD6EJB+Bks1bdlFA+mYtnwYLO2WOdry/bJGLQcUn3Nn6jI/qC19pC0tLArd9aAFjfSZVw63b37WnTUUAmD5cY38a+/CdxxHNPITAyPk2+A2QPoxQwLxcdi3dFduBErGnQHIOzoKgPQPWP5cW5oAS3f4Zv6qknFnN9bD0+6cogmvBKQ7wVJFI3+xtDrSW5m/zqaJ2jqw/FXSgWB5VoT3TXh5z/uacH2d1O8dCH2tDV+WDQkTrtdIMwk3dhwsTW407tx+zyg8dfS8iJCl420XJdavEl7RH4mJ2jpt6Yf2zXmvZ2obVMbwTG1D9Aptr04HwdDFqTbdMuVO18hfJpB4p2DcapUTCsatBsvTCSr8QqoNAfmlBHV6c3zarVJ5w7iVgPRG7PypnveBSnhTwo28OxASDRi3UoyI+Bew9OlYNbhI9a5StC/2wX0v5lONEjykx2If2l9ggmvUKOFq404Tc9fq6Pj5YcgyLmrs3IpUiyV6jb1GrWjmzlcDhlcOtwNSAMi/aaS7e95AW35/2K8xPu1W1UP+E6pd5q1dbyAfs0b6s5lIHk6vO2vFR+LfqWf5vq7Wgw1uiXvv3IXuJAvSPSJ8KjJ1m92fA8oQUOatqciIw2tZVOZtA5M6SzLa8p6WBVW6Ti0DQK9kNPIvLZPTRpsNM55tGuwSwvu/JUlLOJz+aJ6YOs8Qq9M5UcqWjKWD7USQ55onSbKTiohzK/J+Db3o52gm4UX4UPOkYpUuSUUkupTg5njgmYNqzfuV8Ma2w8Hyt80TfaRNahkAysEjUtiIk/AwuDVxgUbeGWP9gBo1EgJAsq36x6+oUSMh0BhujlmE/WpIgDJvS0ViMelHmm9ePGaCa9UQoONBY7ckGpAKSeur8MtqCNBNfqhnEgLxlDE7zSUTXJibxEvJgXRATLiH4Q2pkhopNLQ+K+9QowgQa9FihmkBkD01aigZd4pG/i5G5id/cm7t0IRyaYsQFfbjJX9pp0mVRQ0IhdfcqeLL6mZ4jxTTU20ESE8mxDi7BkGmICQs78rEgoqKAdLHCaHz7jzVzJ+cWwuWPkiIdJ9JvWnJzK6JB5P1TQ/4yDpTBg2VxvZejEQZfXeAxY8kkok6svx6z8XlBMge2vKrSa04IdFPthojM7smSc3qB4UiRJocX2rKovvaEnVInD7JvBcfmeWoZLREAxNpRhwo2PAhXaXiWIUvFZ2Xi5BeYLFKG6NyqAif2M7jE69teSpXw+JVGAD5m9wyP0v7vQpfrwaB/14nfDipv9jHOORbelRMrxpSwfn2qOeHxCluPwTk9yRIlMtRywHytw6JVDVSGZDeFvWLurHIR6UXL7+j0Ad5p2SjfiXYkmdT9STUkPEvtFVB9aKu6qgAAAAASUVORK5CYII=" alt="logout-rounded"></button>
        </div>
    </div>
</template>

<script>
    import { useAuthStore } from '../../store/AuthStore';
    import router from '../../routes/routes';
    export default {
        data() {
            const AuthStore = useAuthStore()
            return {
                AuthStore: AuthStore
            }
        },
        methods: {
            async logout() {
                await this.AuthStore.signout()
                this.AuthStore.user = null
                this.AuthStore.isLogged = false
                router.push('/login')
            }
        }
    }
</script>