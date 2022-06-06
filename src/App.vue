<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  WButton,
  WCheckbox,
  WDropdown,
  WInput,
  WMenu,
  WModal,
  WToggle,
} from './index'
const dark = ref(false)
const selectedColor = ref('theme-default')
const modal = ref({
  small: false,
  medium: false,
  large: false,
  closeBtn: false,
  noBackdrop: false,
  noOutside: false,
  headless: false,
  backdropBlur: false,
})

const input = ref({
  default: 'John Doe',
  validation: '',
})

function changeColor(color: string) {
  document.documentElement.classList.remove(selectedColor.value)
  selectedColor.value = color
  document.documentElement.classList.add(color)
}
// watch dark mode ref
watch(dark, () => {
  if (dark.value) {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
  }
  else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
})
</script>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<template>
  <div class="antialiased text-base-content pb-10">
    <nav
      class="flex sticky top-0 z-40 flex-none py-3 mx-auto w-full border-b bg-base-100"
    >
      <div
        class="flex justify-between items-center px-3 mx-auto w-full max-w-7xl lg:px-4"
      >
        <div class="flex">
          <svg
            viewBox="0.587 0.608 126.313 123.526"
            class="h-7 mr-3 fill-primary"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              class=""
              x="0.587"
              y="0.608"
              width="96.933"
              height="93.502"
              rx="10"
              ry="10"
            />
            <rect
              x="29.967"
              y="30.632"
              width="96.933"
              height="93.502"
              rx="10"
              ry="10"
              style="fill: #213142; fill-rule: nonzero; paint-order: fill"
            />
          </svg>
          <span class="self-center text-lg font-semibold whitespace-nowrap">VueWindi</span>
        </div>
        <div class="flex">
          <WButton
            tag="a"
            href="https://github.com/drope222/VueWindi"
            target="_blank"
            variant="transparent"
            color="secondary"
            class="stroke-base-content"
          >
            <svg
              class="h-5"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </WButton>

          <WDropdown placement="bottom-end">
            <template #trigger>
              <WButton
                variant="transparent"
                color="secondary"
                class="stroke-base-content"
              >
                <svg
                  class="h-5.4"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.9"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </WButton>
            </template>

            <WMenu compact rounded horizontal="md" class="w-auto !bg-base-200">
              <WButton menu-item @click="changeColor('theme-default')">
                <span class="rounded-full bg-blue-700 h-7 w-7" />
              </WButton>
              <WButton menu-item @click="changeColor('theme-teal')">
                <span class="rounded-full bg-teal-700 h-7 w-7" />
              </WButton>
              <WButton menu-item @click="changeColor('theme-dracula')">
                <span class="rounded-full bg-rose-700 h-7 w-7" />
              </WButton>
              <WButton menu-item @click="changeColor('theme-violet')">
                <span class="rounded-full bg-violet-700 h-7 w-7" />
              </WButton>
              <WButton menu-item @click="changeColor('theme-orange')">
                <span class="rounded-full bg-orange-700 h-7 w-7" />
              </WButton>
            </WMenu>
          </WDropdown>

          <WButton
            variant="transparent"
            color="secondary"
            class="fill-base-content"
            @click="dark = !dark"
          >
            <svg
              v-show="!dark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-5"
            >
              <path
                d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"
              />
              <path
                d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"
              />
              <path
                d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"
              />
              <path
                d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"
              />
              <path
                d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"
              />
              <path
                d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"
              />
              <path
                d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"
              />
              <path
                d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"
              />
            </svg>
            <svg
              v-show="dark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-5"
            >
              <path
                d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"
              />
            </svg>
          </WButton>
        </div>
      </div>
    </nav>
    <div class="container max-w-6xl m-auto mt-10 p-4 lg:p-0">
      <div class="">
        <div>
          <h2 class="font-semibold text-sm mt-10">
            Colors
          </h2>
          <div
            class="box-component"
          >
            <div class="flex flex-wrap gap-2">
              <div>
                <div class="h-15 w-30 bg-neutral flex justify-center items-center rounded-t-$rounded-btn">
                  <div class="text-neutral-content text-sm">
                    neutral
                  </div>
                </div>
                <div class="h-20 w-30 bg-neutral flex justify-center items-center rounded-b-$rounded-btn">
                  <div class="text-neutral-content text-sm">
                    neutral-focus
                  </div>
                </div>
              </div>
              <div>
                <div class="h-15 w-30 bg-primary flex justify-center items-center rounded-t-$rounded-btn">
                  <div class="text-primary-content text-sm">
                    primary
                  </div>
                </div>
                <div class="h-20 w-30 bg-primary flex justify-center items-center rounded-b-$rounded-btn">
                  <div class="text-primary-content text-sm">
                    primary-focus
                  </div>
                </div>
              </div>
              <div>
                <div class="h-15 w-30 bg-secondary flex justify-center items-center rounded-t-$rounded-btn">
                  <div class="text-secondary-content text-sm">
                    secondary
                  </div>
                </div>
                <div class="h-20 w-30 bg-secondary flex justify-center items-center rounded-b-$rounded-btn">
                  <div class="text-secondary-content text-sm">
                    secondary-focus
                  </div>
                </div>
              </div>
              <div>
                <div class="h-15 w-30 bg-accent flex justify-center items-center rounded-t-$rounded-btn">
                  <div class="text-accent-content text-sm">
                    accent
                  </div>
                </div>
                <div class="h-20 w-30 bg-accent flex justify-center items-center rounded-b-$rounded-btn">
                  <div class="text-accent-content text-sm">
                    accent-focus
                  </div>
                </div>
              </div>
              <div>
                <div class="h-15 w-30 bg-success flex justify-center items-center rounded-t-$rounded-btn">
                  <div class="text-success-content text-sm">
                    success
                  </div>
                </div>
                <div class="h-20 w-30 bg-success flex justify-center items-center rounded-b-$rounded-btn">
                  <div class="text-success-content text-sm">
                    success-focus
                  </div>
                </div>
              </div>
              <div>
                <div class="h-15 w-30 bg-danger flex justify-center items-center rounded-t-$rounded-btn">
                  <div class="text-danger-content text-sm">
                    danger
                  </div>
                </div>
                <div class="h-20 w-30 bg-danger flex justify-center items-center rounded-b-$rounded-btn">
                  <div class="text-danger-content text-sm">
                    danger-focus
                  </div>
                </div>
              </div>
              <div>
                <div class="h-15 w-30 bg-warning flex justify-center items-center rounded-t-$rounded-btn">
                  <div class="text-warning-content text-sm">
                    warning
                  </div>
                </div>
                <div class="h-20 w-30 bg-warning flex justify-center items-center rounded-b-$rounded-btn">
                  <div class="text-warning-content text-sm">
                    warning-focus
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <div>
                <div class="h-10 w-30 bg-base-100 flex justify-center items-center rounded-t-$rounded-btn">
                  <div class="text-base-content text-sm">
                    base-100
                  </div>
                </div>
                <div class="h-10 w-30 bg-base-200 flex justify-center items-center">
                  <div class="text-base-content  text-sm">
                    base-200
                  </div>
                </div>
                <div class="h-10 w-30 bg-base-300 flex justify-center items-center rounded-b-$rounded-btn">
                  <div class="text-base-content  text-sm">
                    base-300
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 class="font-semibold text-sm mt-10">
          Input component
        </h2>
        <div
          class="box-component"
        >
          <WInput placeholder="Type here..." />
          <WInput :bordered="false" placeholder="Bordered=false here..." />
          <WInput :bordered="false" ghost placeholder="Ghost here..." />

          <div class="flex flex-wrap gap-2 items-center">
            <WInput size="xs" placeholder="Type here..." />
            <WInput size="sm" placeholder="Type here..." />
            <WInput size="md" placeholder="Type here..." />
            <WInput size="lg" placeholder="Type here..." />
          </div>

          <div class="flex flex-wrap gap-2">
            <WInput color="primary" placeholder="Type here..." />
            <WInput color="secondary" placeholder="Type here..." />
            <WInput color="success" placeholder="Type here..." />
            <WInput color="warning" placeholder="Type here..." />
            <WInput color="danger" placeholder="Type here..." />
          </div>

          <div class="flex w-full">
            <WInput class="w-full" placeholder="Type here..." />
          </div>

          <div class="flex flex-wrap gap-2">
            <WInput
              v-model:value="input.default"
              label="Your name"
              placeholder="With label here..."
            />
            <WInput
              v-model:value="input.validation"
              label="Your name"
              error="The name field is required."
              placeholder="With validation here..."
            />

            <WInput disabled label="Disabled" placeholder="Type here..." />

            <WInput disabled label="Disabled" value="disabled with text" />
          </div>
        </div>
        <h2 class="font-semibold text-sm mt-10">
          Checkbox component
        </h2>
        <div
          class="box-component"
        >
          <WCheckbox checked />
          <WCheckbox checked color="secondary" />
          <WCheckbox checked color="success" />
          <WCheckbox checked color="warning" />
          <WCheckbox checked color="danger" />

          <WCheckbox checked size="xs" />
          <WCheckbox checked size="sm" />
          <WCheckbox checked size="md" />
          <WCheckbox checked size="lg" />
          <WCheckbox checked disabled size="lg" />
        </div>
        <h2 class="font-semibold text-sm mt-10">
          Toggle component
        </h2>
        <div
          class="box-component"
        >
          <WToggle checked />
          <WToggle checked color="secondary" />
          <WToggle checked color="success" />
          <WToggle checked color="warning" />
          <WToggle checked color="danger" />

          <WToggle checked size="xs" />
          <WToggle checked size="sm" />
          <WToggle checked />
          <WToggle checked size="lg" />

          <WToggle disabled />
          <WToggle disabled checked />
          <div class="flex flex-col w-32">
            <label
              class="cursor-pointer flex select-none content-center py-2 px-1 justify-between"
            >
              <span class="label-text">Label</span>
              <WToggle />
            </label>
          </div>
        </div>
        <h2 class="font-semibold text-sm mt-10">
          Modal component
        </h2>
        <div
          class="box-component"
        >
          <WButton @click="modal.small = true">
            Modal sm
          </WButton>
          <WButton @click="modal.medium = true">
            Modal md
          </WButton>
          <WButton @click="modal.large = true">
            Modal lg
          </WButton>
          <WButton @click="modal.closeBtn = true">
            Close btn
          </WButton>
          <WButton @click="modal.noBackdrop = true">
            No backdrop
          </WButton>
          <WButton @click="modal.noOutside = true">
            No outside
          </WButton>
          <WButton @click="modal.headless = true">
            Headless
          </WButton>
          <WButton @click="modal.backdropBlur = true">
            Backdrop blur
          </WButton>

          <WModal v-model:active="modal.small">
            <template #header>
              The important modal header
            </template>
            <template #body>
              The modal body
            </template>
            <template #footer>
              <WButton @click="modal.small = false">
                Dismiss!
              </WButton>
            </template>
          </WModal>
          <WModal v-model:active="modal.medium" size="md">
            <template #header>
              The important modal header
            </template>
            <template #body>
              The modal body
            </template>
            <template #footer>
              <WButton @click="modal.medium = false">
                Dismiss!
              </WButton>
            </template>
          </WModal>
          <WModal v-model:active="modal.large" size="lg">
            <template #header>
              The important modal header
            </template>
            <template #body>
              The modal body
            </template>
            <template #footer>
              <WButton @click="modal.large = false">
                Dismiss!
              </WButton>
            </template>
          </WModal>
          <WModal v-model:active="modal.closeBtn" close-btn>
            <template #header>
              The important modal header
            </template>
            <template #body>
              The modal body
            </template>
            <template #footer>
              <WButton @click="modal.closeBtn = false">
                Dismiss!
              </WButton>
            </template>
          </WModal>
          <WModal
            v-model:active="modal.noBackdrop"
            :outside="false"
            :backdrop="false"
          >
            <template #header>
              The important modal header
            </template>
            <template #body>
              The noBackdrop modal body
            </template>
            <template #footer>
              <WButton @click="modal.noBackdrop = false">
                Dismiss!
              </WButton>
            </template>
          </WModal>
          <WModal v-model:active="modal.noOutside" :outside="false">
            <template #header>
              The important modal header
            </template>
            <template #body>
              The noOutside modal body
            </template>
            <template #footer>
              <WButton @click="modal.noOutside = false">
                Dismiss!
              </WButton>
            </template>
          </WModal>
          <WModal v-model:active="modal.headless">
            <div class="bg-primary px-6 py-14 text-center">
              <h1 class="text-2xl font-bold text-primary-content">
                My own modal
              </h1>
            </div>
          </WModal>
          <WModal
            v-model:active="modal.backdropBlur"
            backdrop-class="backdrop-brightness-60 backdrop-blur-1"
          >
            <template #header>
              The important modal header
            </template>
            <template #body>
              The backdrop blur modal body
            </template>
            <template #footer>
              <WButton @click="modal.backdropBlur = false">
                Dismiss!
              </WButton>
            </template>
          </WModal>
        </div>

        <h2 class="font-semibold text-sm mt-10">
          Menu component
        </h2>
        <div
          class="box-component"
        >
          <!-- default -->
          <WMenu>
            <WButton menu-item>
              Item 1
            </WButton>
            <WButton menu-item>
              Item 2
            </WButton>
            <WButton menu-item>
              Item 3
            </WButton>
          </WMenu>

          <!-- hover-border -->
          <WMenu hover-border rounded>
            <WButton menu-item>
              Item 1
            </WButton>
            <WButton menu-item>
              Item 2
            </WButton>
            <WButton menu-item>
              Item 3
            </WButton>
          </WMenu>
          <!-- rounded padding -->
          <WMenu rounded padding>
            <WButton menu-item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Item 1
            </WButton>
            <WButton menu-item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Item 2
            </WButton>
            <WButton menu-item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Item 3
            </WButton>
          </WMenu>
          <!-- compact -->
          <WMenu compact rounded padding>
            <WButton menu-item>
              Item 1
            </WButton>
            <WButton menu-item>
              Item 2
            </WButton>
            <WButton menu-item>
              Item 3
            </WButton>
          </WMenu>
          <!-- compact responsive: sm | md | lg | xl -->
          <WMenu compact="lg" rounded padding>
            <WButton menu-item>
              Responsive 1
            </WButton>
            <WButton menu-item>
              Responsive 2
            </WButton>
            <WButton menu-item>
              Responsive 3
            </WButton>
          </WMenu>
          <!-- compact responsive: sm | md | lg | xl -->
          <WMenu compact rounded>
            <WButton menu-item tag="a" href="/">
              Link 1
            </WButton>
            <WButton menu-item tag="a" href="/">
              Link 2
            </WButton>
            <WButton menu-item tag="a" href="/">
              Link 3
            </WButton>
          </WMenu>
          <!-- disabled -->
          <WMenu rounded padding>
            <WButton menu-item class="disabled">
              Disabled 1
            </WButton>
            <WButton menu-item class="disabled">
              Disabled 2
            </WButton>
            <WButton menu-item class="disabled">
              Disabled 3
            </WButton>
          </WMenu>
          <!-- horizontal + width auto -->
          <WMenu horizontal rounded class="w-auto">
            <WButton menu-item>
              Item 1
            </WButton>
            <WButton menu-item>
              Item 2
            </WButton>
            <WButton menu-item>
              Item 3
            </WButton>
          </WMenu>
          <!-- horizontal responsive: sm | md | lg | xl -->
          <WMenu horizontal="sm" rounded class="w-auto">
            <WButton menu-item>
              Responsive 1
            </WButton>
            <WButton menu-item>
              Responsive 2
            </WButton>
            <WButton menu-item>
              Responsive 3
            </WButton>
          </WMenu>

          <!-- only icons (horizontal) padding -->
          <WMenu rounded padding class="w-auto">
            <WButton menu-item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </WButton>
            <WButton menu-item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </WButton>
            <WButton menu-item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </WButton>
          </WMenu>
          <WMenu padding>
            <span class="menu-title">Category</span>
            <WButton menu-item>
              Item 1
            </WButton>
            <WButton menu-item>
              Item 2
            </WButton>
            <span class="menu-title">Other Category</span>
            <WButton menu-item>
              Item 3
            </WButton>
            <WButton menu-item>
              Item 4
            </WButton>
          </WMenu>
        </div>

        <h2 class="font-semibold text-sm mt-10">
          Dropdown component
        </h2>
        <div
          class="box-component"
        >
          <WDropdown hover>
            <template #trigger="{ active }">
              <WButton :active="active">
                Hover
              </WButton>
            </template>
            <WMenu rounded padding>
              <WButton menu-item>
                Item 1
              </WButton>
              <WButton menu-item>
                Item 2
              </WButton>
              <WButton menu-item>
                Item 3
              </WButton>
            </WMenu>
          </WDropdown>
          <WDropdown placement="bottom-start">
            <template #trigger="{ active }">
              <WButton :active="active">
                Bottom-start
              </WButton>
            </template>
            <WMenu rounded padding>
              <WButton menu-item>
                Item 1
              </WButton>
              <WButton menu-item>
                Item 2
              </WButton>
              <WButton menu-item>
                Item 3
              </WButton>
            </WMenu>
          </WDropdown>
          <WDropdown placement="bottom-end">
            <template #trigger="{ active }">
              <WButton :active="active">
                Bottom-end
              </WButton>
            </template>
            test
          </WDropdown>
          <WDropdown placement="top-start">
            <template #trigger="{ active }">
              <WButton :active="active">
                Top-start
              </WButton>
            </template>
            test
          </WDropdown>
          <WDropdown placement="top-end">
            <template #trigger="{ active }">
              <WButton :active="active">
                Top-end
              </WButton>
            </template>
            test
          </WDropdown>
        </div>

        <h2 class="font-semibold text-sm mt-10">
          Button component
        </h2>
        <div
          class="box-component"
        >
          <WButton variant="default" color="primary">
            Primary
          </WButton>
          <WButton loading>
            Loading
          </WButton>
          <WButton pills>
            Button pills
          </WButton>
          <WButton disabled>
            Disabled
          </WButton>
          <WButton>
            <svg
              class="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
            Buy now
          </WButton>
          <WButton color="primary">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </WButton>

          <WButton circle variant="outline">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </WButton>
        </div>
        <h2 class="font-semibold text-sm mt-10 mb-4">
          Outline
        </h2>
        <div
          class="box-component"
        >
          <WButton color="primary" variant="outline">
            Primary
          </WButton>
          <WButton color="secondary" variant="outline">
            Secondary
          </WButton>
          <WButton color="success" variant="outline">
            Success
          </WButton>
          <WButton color="danger" variant="outline">
            Danger
          </WButton>
          <WButton color="warning" variant="outline">
            Warning
          </WButton>
        </div>
        <h2 class="font-semibold text-sm mt-10 mb-4">
          Transparent
        </h2>
        <div
          class="box-component"
        >
          <WButton variant="transparent">
            Primary
          </WButton>
          <WButton color="secondary" variant="transparent">
            Secondary
          </WButton>
          <WButton color="success" variant="transparent">
            Success
          </WButton>
          <WButton color="danger" variant="transparent">
            Danger
          </WButton>
          <WButton color="warning" variant="transparent">
            Warning
          </WButton>
        </div>
        <h2 class="font-semibold text-sm mt-10 mb-4">
          Colors
        </h2>
        <div
          class="box-component"
        >
          <WButton color="primary">
            Primary
          </WButton>
          <WButton color="secondary">
            Secondary
          </WButton>
          <WButton color="success">
            Success
          </WButton>
          <WButton color="danger">
            Danger
          </WButton>
          <WButton color="warning">
            Warning
          </WButton>
        </div>
        <h2 class="font-semibold text-sm mt-10 mb-4">
          Link
        </h2>
        <div
          class="box-component"
        >
          <WButton color="primary" variant="link">
            Primary
          </WButton>
          <WButton color="secondary" variant="link">
            Secondary
          </WButton>
          <WButton color="success" variant="link">
            Success
          </WButton>
          <WButton color="danger" variant="link">
            Danger
          </WButton>
          <WButton color="warning" variant="link">
            Warning
          </WButton>
        </div>
        <h2 class="font-semibold text-sm mt-10 mb-4">
          Sizes
        </h2>
        <div
          class="box-component"
        >
          <WButton size="xs">
            Extra-small
          </WButton>
          <WButton size="sm">
            Small
          </WButton>
          <WButton>normal </WButton>
          <WButton size="lg">
            Large
          </WButton>
          <WButton size="xl">
            Extra-large
          </WButton>
        </div>
        <h2 class="font-semibold text-sm mt-10 mb-4">
          Responsive
        </h2>
        <div
          class="box-component"
        >
          <WButton size="sm" md="lg">
            Responsive
          </WButton>
        </div>
      </div>
    </div>
    <div />
  </div>
</template>

<style>
.box-component {
 @apply flex flex-wrap items-center gap-3 bg-gray-300/10 dark:bg-gray-300/3 p-4 rounded-$rounded-box mt-2 border-1 ;
}

.theme-dracula * {
 @apply border-base-200/60 dark:border-base-100;
}
</style>
