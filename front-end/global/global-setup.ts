(globalThis as any).$$ = {
  loading(status: boolean) {
    const portalLoading = document.querySelector("#portal-loading");
    if (!portalLoading) return;

    if (status) {
      portalLoading.innerHTML = `
        <div class="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999]">
          <div class="w-48 h-20 flex justify-center items-center bg-white">
            <div class="loader"></div>
          </div>
        </div>
      `;
    } else {
      portalLoading.innerHTML = "";
    }
  },
};
