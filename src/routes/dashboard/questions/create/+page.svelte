<script lang="ts">
  import { A, Heading, P, Select, Input, Label, Button, Textarea } from 'flowbite-svelte';
  export let data
  $: ({adminData} = data)

  let answers = [
    {value: "a", name: "A"},
    {value: "b", name: "B"},
    {value: "c", name: "C"},
    {value: "d", name: "D"},
  ]

  let id: number;
  let question: string;
  let option_a: string;
  let option_b: string;
  let option_c: string;
  let option_d: string;
  let answer: string;

  async function createQuestion() {
    const { data: existingQuestion } = await data.supabase
      .from('questions')
      .select('*')
      .eq('id', id)
      .single()
    if (existingQuestion) {
      alert('Pertanyaan dengan nomor ini sudah ada!')
      return
    }
    await data.supabase
      .from('questions')
      .insert(
        {
          id: id,
          question: question,
          option_a: option_a,
          option_b: option_b,
          option_c: option_c,
          option_d: option_d,
          answer: answer,
        },
      )
    window.close()
  }
</script>

<form class="ml-10 w-3/4">
  <A class="mb-3 mt-6" href="/dashboard/questions"><P color="blue">Kembali ke dashboard jawaban</P></A>
  <Heading tag="h3" class="mb-6">Pertanyaan Baru</Heading>
  <div class="grid mb-6">
    <div class="mb-3">
      <Label for="id" class="mb-2">Nomor</Label>
      <Input id="id" bind:value={id}></Input>
    </div>
    <div class="mb-3">
      <Label for="pertanyaan" class="mb-2">Pertanyaan</Label>
      <Textarea id="pertanyaan" bind:value={question}></Textarea>
    </div>
    <div class="mb-3">
      <Label for="opsi_a" class="mb-2">Opsi A</Label>
      <Textarea id="opsi_a" bind:value={option_a}></Textarea>
    </div>
    <div class="mb-3">
      <Label for="opsi_b" class="mb-2">Opsi B</Label>
      <Textarea id="opsi_b" bind:value={option_b}></Textarea>
    </div>
    <div class="mb-3">
      <Label for="opsi_c" class="mb-2">Opsi C</Label>
      <Textarea id="opsi_c" bind:value={option_c}></Textarea>
    </div>
    <div class="mb-3">
      <Label for="opsi_d" class="mb-2">Opsi D</Label>
      <Textarea id="opsi_d" bind:value={option_d}></Textarea>
    </div>
    <div class="mb-3">
      <Label for="jawaban" class="mb-2">Jawaban</Label>
      <Select id="jawaban" items={answers} bind:value={answer}/>
    </div>
    <div class="mb-3">
      <Button on:click={createQuestion}>Simpan</Button>
    </div>
</form>