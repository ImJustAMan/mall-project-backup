import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [vue()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: join(__dirname, 'src/')
			}
		]
	},
	css: {
		postcss: {
			plugins: [
				require('postcss-pxtorem')({
					rootValue: 16, // 换算的基数 默认值16 理解为 16px = 1rem
					selectorBlackList: [], // 忽略转换正则匹配项
					propList: ['*'],  //要转换的匹配项
					minPixelValue: 2 // 要转换的最小像素值
				})
			]
		}
	}
})
