var current_url = window.location;
var project_path = 'project/';

function url_exists(url, cb){
	jQuery.ajax({
		url:      url,
		async:    false,
		dataType: 'text',
		type:     'HEAD',
		complete:  function(xhr){
			if(typeof cb === 'function')
				cb.apply(this, [xhr.status]);
		}
	});
}

// onload
$(window).bind('load', function(){

		var converter = new Showdown.converter();
		var data = '';
		var this_project = '';
		var project_name = '';
		var progress = [];

		// fetch data from .md file
		$.get('project.md', function(data) {
		data = converter.makeHtml(data);
		data = $('<div/>').append(data); // quick parsing fix
		//console.log(data);

		// logotype
		$('h1#logo').text($('h1',data).text());

		// logotype
		$('#compatibility').text($('p',data).text());

		// tabs
		$('.tab-pane').each(function(i) {

			$('ul:nth(' + i + ') > li',data).each(function(j) {

				project_name = $(this).text();
				project_name_sys = project_name.split(' ').join('_').toLowerCase() + '/'; // + '.html'
				this_project = $('.projects .table tbody:nth(' + i + ')');


				url_exists(project_path + project_name_sys, function(status){

					if(status === 200){
						this_project.append('<tr> <td> ' + project_name + ' </td> <td class="status ready"> <a class="btn btn-mini btn-success" href="' + project_path + project_name_sys + '" target="_blank">Ready</a> </td> </tr>');
					}
					else{
						this_project.append('<tr> <td> ' + project_name + ' </td> <td class="status"> <i class="icon-time"></i> In Progress </td> </tr>');
					}

				});

			});

			// create data array for the progress bar
			if($('.status',this).length){
				progress.push( $('.status.ready',this).length / $('.status',this).length * 100 );
			}

			// remove tab if there's no content
			if($('.status',this).length===0){
				$('ul.nav-tabs li:nth(' + i + ')').remove();
			}

		});



		// paint the progress bar
		$('.progress .bar').each(function(i) {
			$(this).css('width', progress[i]/  progress.length + '%');
		});

	});



});
