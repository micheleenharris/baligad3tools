from flask import render_template, redirect, url_for, request, Blueprint, jsonify
from app import app, BASEDIR
import os, glob

mod = Blueprint('mod', __name__, template_folder='templates')


@mod.route('/', methods=['POST','GET'])
@mod.route('/index', methods=['POST','GET'])
def index():
	organisms = ['mtb','thaps']
	if request.method == 'POST':
		if request.form['submit'] == 'Displays':
			return redirect(url_for('.displays', org=request.form['selectorg']))
	return render_template('index.html', organisms=organisms)


@mod.route('/displays/<org>', methods=['POST','GET'])
def displays(org):

	options = []
	if org == 'thaps':
		options = ['Violin Plot'] #, 'Cluster Lineplot']
	if org == 'mtb':
		options = ['Cluster Heatmap', 'Cluster Lineplot']
	if request.method == 'POST':
		if request.form['submit'] == 'Go to display':
			if request.form['selectopt'] == 'Violin Plot':
				return redirect(url_for('.data', org=org, display='violin_plot'))
			if request.form['selectopt'] == 'Cluster Heatmap':
				return redirect(url_for('.data', org=org, display='heatmap'))
			if request.form['selectopt'] == 'Cluster Lineplot':
				return redirect(url_for('.data', org=org, display='lineplot'))
	return render_template('display_options.html', options=options)

@mod.route('/data/<org>/<display>', methods=['POST','GET'])
def data(org,display):

	options = []

	clustselec = ''

	if display == 'violin_plot':
		options = glob.glob('%s/%s/cluster_*.js' % (BASEDIR, 'static/datafiles/%s/violin_data' % org))
		options = [os.path.basename(filename).replace('.js','') for filename in options]
	if display == 'heatmap':
		options = glob.glob('%s/%s/*.csv' % (BASEDIR, 'static/datafiles/%s/heatmap_files' % org))
		options = [os.path.basename(filename).replace('.csv','') for filename in options]
		#options = [option.split('_')[1] for option in options]
	if display == 'lineplot':
		options = glob.glob('%s/%s/*.json' % (BASEDIR, 'static/datafiles/%s/lineplot_files' % org))
		options = [os.path.basename(filename).replace('.json','') for filename in options]

	if display == 'violin_plot':
		if request.method == 'POST':
			if request.form['submit'] == 'Go to plot':
				return redirect(url_for('.d3violinplot', cluster=request.form['selectopt'], org=org))

	if display == 'heatmap':
		if request.method == 'POST':
			if request.form['submit'] == 'Go to plot':
				return redirect(url_for('.d3heatmap', cluster=request.form['selectopt'], org=org))

	if display == 'lineplot':
		if request.method == 'POST':
			return redirect(url_for('.d3lineplot', cluster = request.form['selectopt'], org=org))
	return render_template('data_options.html', options=options)

@mod.route('/d3violinplot/<org>/<cluster>')
def d3violinplot(org,cluster):
	return render_template('d3violinplot.html', cluster=cluster+'.js', organism=org)

@mod.route('/d3heatmap/<org>/<cluster>')
def d3heatmap(cluster,org):
	if os.stat(('%s/%s/%s.csv' % (BASEDIR, 'static/datafiles/%s/heatmap_files' % org, cluster))).st_size > 0:
		return render_template('d3heatmap.html', organism=org, inputdata=cluster+'.csv', inputlabels=cluster+'.js')
	else:
		return render_template('no_data.html')

@mod.route('/d3lineplot/<org>/<cluster>')
def d3lineplot(org, cluster):
	return render_template('d3lineplot.html', organism=org, cluster=cluster+'.json')

@mod.route('/no_data/<cluster>')
def no_data(cluster):
	return render_template('no_data.html')



