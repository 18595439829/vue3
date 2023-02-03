<template>
  <div :class="$style['container']">
    <div
      v-for="weather in weatherList"
      :key="weather.date"
      :class="$style['weather']"
    >
      <div :class="$style['date']">
        {{ weather.date }}
      </div>
      <div :class="$style['content']">
        <div :class="$style['content-item']">
          <div :class="$style['label']"></div>
          <div :class="$style['value']">
            <div>白天</div>
            <div>夜晚</div>
          </div>
        </div>
        <div :class="$style['content-item']">
          <div :class="$style['label']">气温</div>
          <div :class="$style['value']">
            <div>{{ weather.high }}℃</div>
            <div>{{ weather.low }}℃</div>
          </div>
        </div>
        <div :class="$style['content-item']">
          <div :class="$style['label']">风向</div>
          <div :class="$style['value']">
            <div>{{ weather.dayWindDirection }}</div>
            <div>{{ weather.nightWindDirection }}</div>
          </div>
        </div>
      </div>
    </div>
    <button @click="$emit('change', 'emit-value')">emit</button>
    <div>
      {{test}}
    </div>
  </div>
</template>

<script setup lang="ts">
import weatherSetup from '@/hooks/useWeather'
import { ref } from '@vue/reactivity'

const { weatherList } = weatherSetup()
weatherList

const test = ref('test')
test

</script>

<style lang="less" module>
.container {
  display: flex;

  .weather {
    border-radius: 4px;
    background-color: #eee;
    margin: 0 12px 0 0;
    padding: 12px 0;

    .date {
      text-align: center;
      height: 36px;
      line-height: 36px;
      padding: 0 12px;
      border-bottom: 1px solid #aaa;
    }

    .content {
      .content-item {
        height: 36px;
        line-height: 36px;
        display: flex;
        align-items: center;
        padding: 0 12px;
        border-bottom: 1px solid #aaa;

        // &:nth-child(2n+1) {
        //   background-color: #ccc;
        // }

        &:nth-last-of-type(1) {
          border: none;
        }

        .label {
          width: 50px;
          padding-right: 12px;
        }

        .value {
          display: flex;
          align-items: center;
          width: 100%;

          & > div {
            white-space: nowrap;
            flex: 1;
            flex-shrink: 0;
            padding-right: 12px;

            &:nth-last-of-type(1) {
              padding-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
