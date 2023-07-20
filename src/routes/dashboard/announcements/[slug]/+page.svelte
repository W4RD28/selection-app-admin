<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import { A, Heading, P, Input, Label, Button, Textarea, Select } from 'flowbite-svelte';

  export let data
  $: ({ announcementData } = data)

  async function updateAnnouncement() {
    await data.supabase
      .from('announcement')
      .update(
        {
          title: announcementData.title,
          content: announcementData.content,
        },
      )
      .eq('id', announcementData.id)
    alert('Pengumuman berhasil diubah!')
    invalidateAll()
  }
  async function deleteAnnouncement() {
    await data.supabase
      .from('announcement')
      .delete()
      .eq('id', announcementData.id)
    alert('Pengumuman berhasil dihapus!')
    window.close()
  }
</script>

<svelte:head>
  <title>Detail Pengumuman {announcementData.title}</title>
</svelte:head>

<form class="ml-10 w-3/4">
  <A class="mb-3 mt-6" href="/dashboard/announcements"><P color="blue">Kembali ke dashboard pengumuman</P></A>
  <Heading tag="h3" class="mb-6">Detail Pengumuman {announcementData.title}</Heading>
  <div class="grid mb-6">
    <div class="mb-3">
      <Label for="judul" class="mb-2">Judul</Label>
      <Input id="judul" bind:value={announcementData.title}></Input>
    </div>
    <div class="mb-3">
      <Label for="konten" class="mb-2">Konten</Label>
      <Textarea rows="15" id="konten" bind:value={announcementData.content}></Textarea>
    </div>
  </div>
  <Button class="mb-6" color="blue" on:click={updateAnnouncement}>Simpan</Button>
  <Button class="mb-6" color="red" on:click={deleteAnnouncement}>Hapus</Button>
</form>