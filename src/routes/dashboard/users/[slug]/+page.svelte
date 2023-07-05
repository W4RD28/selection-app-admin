<script lang="ts">
  import { Button, ButtonGroup, P, Heading, Label, Avatar, Input, A } from 'flowbite-svelte';
  
  export let data
  $: ({userData } = data)
  const supabase = data.supabase
  export function generateString(length: number = 8) {
    
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  export const getUserImageUrl = async (path: string) => {
    const { data } = await supabase.storage.from("avatar").getPublicUrl(path);
    return data.publicUrl;
  }

  export const getUserKtp = async (path: string) => {
    const { data } = await supabase.storage.from("ktp").getPublicUrl(path);
    return data.publicUrl;
  }

  export const getUserIjazah = async (path: string) => {
    const { data } = await supabase.storage.from("ijazah").getPublicUrl(path);
    return data.publicUrl;
  }

  export const getUserCv = async (path: string) => {
    const { data } = await supabase.storage.from("cv").getPublicUrl(path);
    return data.publicUrl;
  }
</script>

<svelte:head>
  <title>Detail Pengguna {userData?.id}</title>
</svelte:head>

<form class="ml-10 w-3/4">
  <A class="mb-3 mt-6" href="/dashboard/users"><P color="blue">Kembali ke dashboard pengguna</P></A>
  <Heading tag="h3" class="mb-6">Detail Pengguna</Heading>
  <div class="mb-6">
      {#await getUserImageUrl(userData.avatar_url)}
      <Avatar alt="user image" size="xl" border={true} class="1/2"/>
    {:then avatarUrl} 
      <Avatar alt="user image" src={avatarUrl} size="xl" border={true} class="1/2"/>
    {/await}
    </div>
  <div class="grid gap-10 mb-6 md:grid-cols-3">
    <div class="mb-3">
      <Label for="nama_penuh" class="mb-2">Nama Penuh</Label>
      <Input type="text" id="nama_penuh" disabled>{userData.first_name + " " + userData.last_name}</Input>
    </div>
    <div class="mb-3">
      <Label for="email" class="mb-2">Email</Label>
      <Input type="text" id="email" disabled>{userData.email}</Input>
    </div>
    <div class="mb-3">
      <Label for="phone_number" class="mb-2">Nomor Telepon</Label>
      <Input type="text" id="phone_number" disabled>{userData.phone_number}</Input>
    </div>
    <div class="mb-3">
      <Label for="tanggal_lahir" class="mb-2">Tanggal Lahir</Label>
      <Input type="date" id="tanggal_lahir" disabled>{userData.birth_date}</Input>
    </div>
    <div class="mb-3">
      <Label for="phone_number" class="mb-2">Nomor Telepon</Label>
      <Input type="text" id="phone_number" disabled>{userData.phone_number}</Input>
    </div>
    <div class="mb-3">
      <Label for="nik" class="mb-2">Nomor Induk Kependudukan</Label>
      <Input type="text" id="nik" disabled>{userData.nik}</Input>
    </div>
    <div class="mb-3">
      <Label for="kota" class="mb-2">Kota</Label>
      <Input type="text" id="kota" disabled>{userData.kota}</Input>
    </div>
    <div class="mb-3">
      <Label for="kecamatan" class="mb-2">Kecamatan</Label>
      <Input type="text" id="kecamatan" disabled>{userData.kecamatan}</Input>
    </div>
    <div class="mb-3">
      <Label for="kelurahan" class="mb-2">Kelurahan/Desa</Label>
      <Input type="text" id="kelurahan" disabled>{userData.kelurahan}</Input>
    </div>
    <div class="mb-3">
      <Label for="bootcamp" class="mb-2">Kelas Bootcamp</Label>
      <Input type="text" id="bootcamp" disabled>{userData.course}</Input>
    </div>
    <div class="mb-3">
      <Label for="status" class="mb-2">Status</Label>
      <Input type="text" id="status" disabled>{userData.status}</Input>
    </div>
    <div class="mb-3">
      <Label for="role" class="mb-2">Role</Label>
      <Input type="text" id="role" disabled>{userData.role}</Input>
    </div>
    <div class="mb-3">
      <Label for="ktp" class="pb-2">Kartu Tanda Penduduk</Label>
      {#await getUserKtp(userData.ktp_url)}
        <Button class="mb-3 w-32" type="button" color="light" disabled>Lihat</Button>
      {:then ktpUrl} 
        <Button class="mb-3 w-32" type="button" color="light" on:click={() => window.open(ktpUrl)}>Lihat</Button>
      {/await}
    </div>
    <div class="mb-3">  
      <Label for="cv" class="pb-2">Curriculum Vitae</Label>
      {#await getUserCv(userData.cv_url)}
        <Button class="mb-3 w-32" type="button" color="light" disabled>Lihat</Button>
      {:then cvUrl} 
        <Button class="mb-3 w-32" type="button" color="light" on:click={() => window.open(cvUrl)}>Lihat</Button>
      {/await}
    </div>
    <div class="mb-3">
      <Label for="ijazah" class="pb-2">Ijazah</Label>
      {#await getUserIjazah(userData.ijazah_url)}
        <Button class="mb-3 w-32" type="button" color="light" disabled>Lihat</Button>
      {:then ijazahUrl}
      <Button class="mb-3 w-32" type="button" color="light" on:click={() => window.open(ijazahUrl)}>Lihat</Button>
      {/await}
    </div>
  </div>
</form>
