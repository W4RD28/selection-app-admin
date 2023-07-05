<script lang="ts">
  import { A, Heading, P, Input, Label, Button, Textarea } from 'flowbite-svelte';

  export let data
  $: ({ questionData } = data)
</script>

<svelte:head>
  <title>Detail Pertanyaan {questionData.id}</title>
</svelte:head>

<form class="ml-10 w-3/4">
  <A class="mb-3 mt-6" href="/dashboard/questions"><P color="blue">Kembali ke dashboard jawaban</P></A>
  <Heading tag="h3" class="mb-6">Detail Pertanyaan No {questionData.id}</Heading>
  <div class="grid mb-6">
    <div class="mb-3">
      <Label for="pertanyaan" class="mb-2">Pertanyaan</Label>
      <Textarea id="pertanyaan" bind:value={questionData.question}></Textarea>
    </div>
    <div class="mb-3">
      <Label for="opsi_a" class="mb-2">Opsi A</Label>
      <Textarea id="opsi_a" bind:value={questionData.option_a}></Textarea>
    </div>
    <div class="mb-3">
      <Label for="opsi_b" class="mb-2">Opsi B</Label>
      <Textarea id="opsi_b" bind:value={questionData.option_b}></Textarea>
    </div>
    <div class="mb-3">
      <Label for="opsi_c" class="mb-2">Opsi C</Label>
      <Textarea id="opsi_c" bind:value={questionData.option_c}></Textarea>
    </div>
    <div class="mb-3">
      <Label for="opsi_d" class="mb-2">Opsi D</Label>
      <Textarea id="opsi_d" bind:value={questionData.option_d}></Textarea>
    </div>
    <div class="mb-3">
      <Button>Simpan</Button>
    </div>
</form>