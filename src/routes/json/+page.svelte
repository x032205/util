<script lang="ts">
  import highlighter from "$lib/utilities/highlighter";

  let data = '{"123":"23"}';

  async function format(v: string) {
    try {
      return await highlighter(
        JSON.stringify(JSON.parse(v.trim()), null, 2),
        "json",
      );
    } catch (_) {
      return "Invalid JSON input";
    }
  }

  $: formatted = format(data);
</script>

<div class="flex gap-4 w-full h-full font-mono">
  <textarea
    bind:value={data}
    class="bg-background overflow-auto w-1/2 rounded border p-8 resize-none focus:outline-none focus:border-muted-foreground/50"
  />

  <div class="flex w-1/2 rounded p-8 border bg-[#101010] overflow-auto">
    {#await formatted}
      loading...
    {:then formattedData}
      {@html formattedData}
    {/await}
  </div>
</div>
