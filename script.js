console.log('js ready');
    

  $(document).ready(function() {
    $('.btn').click(function() {
      Swal.fire({
          title: "Apakah Anda Yakin?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya"
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire({
                  title: "Produk Telah Dipesan",
                  text: "Silahkan Lakukan Pembayaran!",
                  icon: "success"
              });
          }
      });
  });
});