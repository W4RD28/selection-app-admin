<script lang="ts">
  import "../../app.postcss";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import { page } from '$app/stores';
  import { Sidebar, SidebarBrand, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  $: activeUrl = $page.url.pathname
  export let data;

  const site = {
    name: 'Digmar Admin',
    href: '/dashboard/users',
    img: '/src/logo1.svg'
  }

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<div class="flex flex-cols-2 h-full">
  <Sidebar asideClass="min-w-3/5 bg-gray-50" class="flex border-solid border-2 border-sky-300 rounded-md">
    <SidebarWrapper class="w-full max-h-full min-h-screen">
      <SidebarBrand {site} />
      <SidebarGroup>
        <SidebarItem label="Users" href='/dashboard/users' active={activeUrl === '/dashboard/users'} />
        <SidebarItem label="Administration" href='/dashboard/administration' active={activeUrl === '/dashboard/administration'} />
        <SidebarItem label="Exam Questions" href='/dashboard/questions' active={activeUrl === '/dashboard/questions'} />
        <SidebarItem label="Exam Results" href='/dashboard/exam-results' active={activeUrl === '/dashboard/exam-results'} />
        <SidebarItem label="Interview" href='/dashboard/interview' active={activeUrl === '/dashboard/interview'} />
        <SidebarItem label="Results" href='/dashboard/results' active={activeUrl === '/dashboard/results'} />
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
  
  <slot />
</div>

