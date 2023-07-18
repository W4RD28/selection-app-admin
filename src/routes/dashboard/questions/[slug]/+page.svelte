<script lang="ts">
  import { A, Heading, P, Input, Label, Button, Textarea, Select } from 'flowbite-svelte';

  export let data
  $: ({ questionData } = data)
  let answers = [
    {value: "a", name: "A"},
    {value: "b", name: "B"},
    {value: "c", name: "C"},
    {value: "d", name: "D"},
  ]

  async function updateQuestion() {
    await data.supabase
      .from('questions')
      .update(
        {
          question: questionData.question,
          option_a: questionData.option_a,
          option_b: questionData.option_b,
          option_c: questionData.option_c,
          option_d: questionData.option_d,
          answer: questionData.answer,
        },
      )
  }
</script>

<svelte:head>
  <title>Detail Pertanyaan {questionData.id}</title>
</svelte:head>

<form class="ml-10 w-3/4">
  <A class="mb-3 mt-6" href="/dashboard/questions"><P color="blue">Kembali ke dashboard jawaban</P></A>
  <Heading tag="h3" class="mb-6">Detail Pertanyaan No {questionData.id}</Heading>
  <div class="grid mb-6">
    <div class="mb-3">
      <Label for="id" class="mb-2">Nomor</Label>
      <Input id="id" disabled bind:value={questionData.id}></Input>
    </div>
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
      <Label for="jawaban" class="mb-2">Jawaban</Label>
      <Select id="jawaban" items={answers} bind:value={questionData.answer}></Select>
    </div>
    <div class="mb-3">
      <Button>Simpan</Button>
    </div>
</form>