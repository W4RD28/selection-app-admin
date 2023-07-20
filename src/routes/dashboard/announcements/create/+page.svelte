<script lang="ts">
  import { A, Heading, P, Input, Label, Button, Textarea, Select } from 'flowbite-svelte';

  export let data
  $: ({adminData} = data)

  let title: string
  let content: string

  async function createAnnouncement() {
    const { announcementData, error } = await data.supabase
      .from('announcement')
      .insert(
        {
          title: title,
          content: content,
        },
      )
    if (error) {
      console.log(error)
    } else {
      alert('Pengumuman berhasil dibuat!')
      window.close()
    }
  }
</script>

<svelte:head>
  <title>Buat Pengumuman Baru</title>
</svelte:head>

<form class="ml-10 w-3/4">
  <A class="mb-3 mt-6" href="/dashboard/announcements"><P color="blue">Kembali ke dashboard pengumuman</P></A>
  <Heading tag="h3" class="mb-6">Buat Pengumuman Baru</Heading>
  <div class="grid mb-6">
    <div class="mb-3">
      <Label for="judul" class="mb-2">Judul</Label>
      <Input id="judul" bind:value={title}></Input>
    </div>
    <div class="mb-3">
      <Label for="konten" class="mb-2">Konten</Label>
      <Textarea rows="15" id="konten" bind:value={content}></Textarea>
    </div>
  </div>
  <Button class="mb-6" color="blue" on:click={createAnnouncement}>Simpan</Button>
</form>