<script lang="ts">
  import { Card, Label, Input, Heading, Checkbox, Button, A } from 'flowbite-svelte'

  export let data
  let { supabase } = data
  $: ({ supabase } = data)
  let email: string
  let password: string

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })

    location.href = "/dashboard/users"
  }
</script>

<svelte:head>
  <title>Admin Login</title>
</svelte:head>

<div>
  <div class="pt-20 pl-20">
    <Card size="sm" class="self-center">
      <Heading tag="h3" class="text-xl font-medium">Admin Login</Heading>
      <form class="p-10">
        <div class="mb-6">
          <Label for="email" class="mb-2">Alamat Email</Label>
          <Input type="email" id="email" bind:value={email} required />
        </div>
        <div class="mb-6">
          <Label for="password" class="mb-2">Password</Label>
          <Input type="password" id="password" bind:value={password} required />
        </div>
        <div class="mb-6">
          <Checkbox id="remember" >Ingat saya</Checkbox>
        </div>
        <Button type="submit" color="primary" on:click={handleLogin}>Login</Button>
        <div class="pt-5">
          <A href="/register">Belum miliki akun? </A>
        </div>
      </form>
    </Card>
  </div>
  
</div>