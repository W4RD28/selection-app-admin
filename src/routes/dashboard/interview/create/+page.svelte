<script lang="ts">
  import { A, Heading, P, Input, Label, Button, Textarea, Select } from 'flowbite-svelte';

  export let data
  $: ({ adminData } = data)
  
  let interviewData = {
    user_id: "",
    room_link: "",
    date: "",
    time: "",
  }

  async function createInterview() {
    const { data: existingInterview } = await data.supabase
      .from('interview_room')
      .select('*')
      .eq('user_id', interviewData.user_id)
      .single()
    if (existingInterview) {
      alert('Ruang wawancara dengan pengguna tersebut sudah dibuat!')
      return
    }
    await data.supabase.from('interview_room').insert(interviewData)
    alert('Ruang wawancara berhasil dibuat!')
    window.close()
  }
</script>

<svelte:head>
  <title>Pembuatan Ruang Wawancara Baru</title>
</svelte:head>

<form>
  <A class="mb-3 mt-6" href="/dashboard/interview"><P color="blue">Kembali ke dashboard wawancara</P></A>
  <div class="ml-10 mt-5 w-3/4">
    <Heading tag="h3" class="mb-6">Membuat Ruang Wawancara Baru</Heading>
    <Heading tag="h4" class="mb-6">Detail Peserta</Heading>
    <div class="grid mb-6">
      <div class="mb-6">
        <Label for="id_peserta" class="mb-2">ID Peserta</Label>
        <Input id="id_peserta" bind:value={interviewData.user_id}></Input>
      </div>
      <div class="mb-6">
        <Button href="/dashboard/users" target="_blank">Lihat Seluruh Pengguna</Button>
      </div>
  </div>
  <Heading tag="h4" class="mb-6">Detail Wawancara</Heading>
  <div class="grid mb-6">
    <div class="mb-6">
      <Label for="room" class="mb-2">Ruang Wawancara</Label>
      <Input id="room" bind:value={interviewData.room_link}></Input>
    </div>
    <div class="mb-6">
      <Label for="tanggal" class="mb-2">Tanggal Wawancara</Label>
      <Input type="date" id="tanggal" bind:value={interviewData.date}></Input>
    </div>
    <div class="mb-6">
      <Label for="jam" class="mb-2">Jam Wawancara (Misal: 12:30:00)</Label>
      <Input id="jam" bind:value={interviewData.time}></Input>
    </div>
  </div>
  <Button class="mb-10" color="blue" href="/dashboard/interview" on:click={createInterview}>Buat Ruang Wawancara</Button>
</form>