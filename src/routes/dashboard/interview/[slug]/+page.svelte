<script lang="ts">
  import { invalidateAll } from '$app/navigation';
import { A, Heading, P, Input, Label, Button, Textarea, Select, ButtonGroup } from 'flowbite-svelte';

  export let data
  $: ({ resultData, interviewData, userData } = data)

  async function passInterview() {
    await data.supabase.from('test_results').update({ interview_result: 'lulus' }).eq('user_id', userData.id)
    invalidateAll()
    alert('Peserta berhasil dinyatakan lulus!')
  }
  async function failInterview() {
    await data.supabase.from('test_results').update({ interview_result: 'tidak lulus' }).eq('user_id', userData.id)
    invalidateAll()
    alert('Peserta berhasil dinyatakan tidak lulus!')
  }
</script>

<svelte:head>
  <title>Detail Wawancara Peserta {userData.id}</title>
</svelte:head>

<form>
  <A class="mb-3 mt-6" href="/dashboard/interview"><P color="blue">Kembali ke dashboard wawancara</P></A>
  <div class="ml-10 mt-5 w-3/4">
    <Heading tag="h3" class="mb-6">Detail Wawancara Peserta No {userData.id}</Heading>
    <Heading tag="h4" class="mb-6">Detail Peserta</Heading>
    <div class="grid mb-6">
      <div class="mb-6">
        <Label for="nama" class="mb-2">Nama Peserta</Label>
        <Input id="nama" disabled>{userData.first_name + " " + userData.last_name}</Input>
      </div>
      <div class="mb-6">
        <Label for="bootcamp" class="mb-2">Bootcamp</Label>
        <Input id="bootcamp" disabled>{userData.course}</Input>
      </div>
      <div class="mb-6">
        <Label for="asal" class="mb-2">Asal</Label>
        <Input id="asal" disabled>{userData.kelurahan + ", " + userData.kecamatan + ", " + userData.kota}</Input>
      </div>
      <!-- Button to Look user detail -->
      <div class="mb-6">
        <Button href="/dashboard/users/{userData.user_id}" target="_blank">Lihat detail pengguna</Button>
      </div>
  </div>
  <Heading tag="h4" class="mb-6">Detail Wawancara</Heading>
  <div class="grid mb-6">
    <div class="mb-6">
      <Label for="room" class="mb-2">Ruang Wawancara</Label>
      <Input id="room" disabled>{interviewData.room_link}</Input>
    </div>
    <div class="mb-6">
      <Label for="tanggal" class="mb-2">Tanggal Wawancara</Label>
      <Input id="tanggal" disabled>{interviewData.date}</Input>
    </div>
    <div class="mb-6">
      <Label for="jam" class="mb-2">Jam Wawancara</Label>
      <Input id="jam" disabled>{interviewData.time}</Input>
    </div>
    <div class="mb-6">
      <Label for="status" class="mb-2">Status Wawancara</Label>
      <Input id="status" disabled>{resultData.interview_result}</Input>
    </div>
  </div>
  <div class="mb-10">
    <Button color="blue" on:click={passInterview}>Lulus</Button>
    <Button color="red" on:click={failInterview}>Tidak Lulus</Button>
  </div>
</form>