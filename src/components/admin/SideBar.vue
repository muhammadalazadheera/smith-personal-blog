<template>
    <div class="w-1/5 h-screen fixed top-0 left-0 bg-gray-800 border-r border-gray-400">
        <div class="h-14 flex justify-center items-center">
            <RouterLink class="font-ivy text-center text-blue-500 block text-xl" to="/">Savannah Mandel</RouterLink>
        </div>
        <nav>
            <ul>
                <li class="py-2 px-6 hover:bg-blue-900" :class="{ 'bg-blue-900': isBlogPage }">
                    <RouterLink class="text-md text-gray-50" to="/admin/blogs"><img class="inline-block mr-2" width="20"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpUlEQVR4nO1WsUpcQRR9BmxNlSj4ASFNagtLG0XBQosU+YY0SRX8g5QG08dOsBL9ALFxO0tjGsnee+7u3BNUSCcT7lOX9e0uvk0wRfIOXJi5c885j5k3zC2KBv8NBDxSYxbwUuFU8FzhLQH31PhRjG8Avso5T1a5kYu1qClrgwNv3Wqw1DRmBQ8HjMuFevFTzXdVuVJGjMtcPX4x0livnn/vdl8AaU46vgj4awE3FNwR+FeBX1fFIhdrNzXcKDklN82FVmgONQbSwsgvquA8pVmAb+/qYxy5h3jaq08LfefrZ3WNq0Lj1gv8bCD5N4y1n9MY10Gz1Q9Bm58r0FynOmiu0x9fJzE3gZ+q8VjBfTVuifm7ePQBTFc5d3Mzm7ltDN6r8bOCBzcdjJ+G5lBjAaVuBxHPmsA3++abYv6tPp/tnnEbP1bVvDtG+/Ob4d3wuncGOecJkctnIull2zivHV8X8IOab4vxZFjLM7QFMp6o+ZfgiqW10ArNaH9yzk+KcUHyqXR8SeGfBLzo27qLMtfxpZTSVPGYUOVynFVEjB/VrPhX8AskPnObTk7A8wAAAABJRU5ErkJggg=="
                            alt="open-book--v1">Blogs</RouterLink>
                </li>
                <li class="py-2 px-6 hover:bg-blue-900" :class="{ 'bg-blue-900': isCategoryPage }">
                    <RouterLink class="text-md text-gray-50" to="/admin/categories"><img class="inline-block mr-2"
                            width="20"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2Zy2oUURCGG0RElyq6cqFIIAufQBEkZGXUhTt3+gaK7n0FIYkmXp5BXbkwxkvEja68JMTdMF31V9tVM2PUjdGWE++aZM7pM5NOQv9woOlFVX/n8p+iOklq1apGQD5MYtcZNkdiH9xg2CyLTQKtoWS9q5llAwx9xGLFaoNEp0XaB0PjE+xpt9i80oA98UuS2VGGmn9w1VTsSAhIaQj5PnxXIgDiN0zIyvQdhEQflF9yfbguQIB8ODaBrwH0FYTEbsQmYLGJykEYNhcNAputHIRgC7EJXIzNAtLZHFtL7E31IGKTPQC5WjkI0BqKBuHWscpBnEh0qvT5EJ1OPNV3EObWfhZ9t+FLFCdXALoPC4DIU9HDSYDWBMTJza5P3UWi94H2gSRQrhQvDQJ9HJrvpwFMOFt198yPu+Y1i13zPdi1atWqVatWv0SidwNquTvRCYui2LrUVIPNuOdeQCy1ngJv9WaWDUQlJeiFXzOD/HwvQFj0UokK+2LphI1Ge+dfRSS0labvd0eDwGb61i5dTgwd+29moKNJhJgX9hB0MXhFoF8A7A1OSJQPEvTzMgEXATtUGiTLz5Uv41tnwxPC7q2yX6fKgjgHKgtCorfDINhOdA3MNhIK0Wg0trPYx/IrYp/SNN3hlcxZrE97iKBv5+eLbSEggJ2KgCjcAOykVzJnsf4HMMyOCXorFoRgN7smajY7u4L+kUAtxI4JlvYAJPWZsdHg4NCxtTjo7FuurGS3HmfF246LotjCopfdnVAiz1eCXulaJq1mtx6zFGTHnNnxkLYTwTok+enugdlGYpc81I6bTd1HYs88tu4L77YTib2M37v2KgmUs2+Gja8MYeNBFu9+ZvbgEHr3f/8VYGf+/Efjnt27ZCOKKB9k6HM33HPV31OrVrJJ9A09zex4noDQCQAAAABJRU5ErkJggg=="
                            alt="diversity">Categories</RouterLink>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    computed: {
        isBlogPage() {
            return this.$route.path === '/admin/blogs';
        },
        isCategoryPage() {
            return this.$route.path === '/admin/categories';
        }
    }
}
</script>